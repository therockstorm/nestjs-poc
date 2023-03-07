import { aws_iam as iam } from "aws-cdk-lib";

import { resourceId } from "../lib/resource-id";
import type { BaseProps } from "./base-props";

export class OpenIdConnectProvider extends iam.OpenIdConnectProvider {
  constructor({
    ctx: { name, scope },
    ...rest
  }: BaseProps & iam.OpenIdConnectProviderProps) {
    super(scope, resourceId({ name, resource: "openIdConnectProvider" }), rest);
  }
}
