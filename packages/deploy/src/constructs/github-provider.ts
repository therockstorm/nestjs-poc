import { aws_iam as iam } from "aws-cdk-lib";

import type { BaseProps } from "./base-props";
import { OpenIdConnectProvider } from "./openid-connect-provider";
import { Role } from "./role";

export type CtorProps = BaseProps &
  Readonly<{ isDev: boolean; organization: string; repository: string }>;

export class GitHubProvider {
  constructor({ isDev, ctx: { scope }, organization, repository }: CtorProps) {
    const sts = "sts.amazonaws.com";
    const url = "https://token.actions.githubusercontent.com";
    // See https://benoitboure.com/securely-access-your-aws-resources-from-github-actions
    const provider = new OpenIdConnectProvider({
      clientIds: [sts],
      ctx: { name: "gitHub", scope },
      thumbprints: ["6938fd4d98bab03faadb97b34396831e3780aea1"],
      url,
    });

    const condUrl = url.replace("https://", "");
    const condSubKey = `${condUrl}:sub`;
    new Role({
      // See https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services#configuring-the-role-and-trust-policy
      assumedBy: new iam.OpenIdConnectPrincipal(provider).withConditions(
        isDev
          ? {
              StringEquals: {
                [`${condSubKey}:aud`]: sts,
              },
              StringLike: {
                [`${condSubKey}`]: `repo:${organization}/${repository}:*`,
              },
            }
          : {
              StringEquals: {
                [`${condUrl}:aud`]: sts,
                [`${condSubKey}`]: `repo:${organization}/${repository}:ref:refs/heads/main`,
              },
            }
      ),
      ctx: { name: "gitHub", scope },
      inlinePolicies: {
        // https://stackoverflow.com/a/61102280
        "cdk-assumeRole-policy": new iam.PolicyDocument({
          statements: [
            new iam.PolicyStatement({
              actions: ["sts:AssumeRole"],
              resources: ["arn:aws:iam::*:role/cdk-*"],
            }),
          ],
        }),
      },
    });
  }
}
