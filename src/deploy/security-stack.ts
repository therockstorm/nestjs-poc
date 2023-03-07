import { Stack, type StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";

import { GitHubProvider } from "./constructs/github-provider";

export class SecurityStack extends Stack {
  public static get project() {
    return "security";
  }

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new GitHubProvider({
      ctx: { name: SecurityStack.project, scope: this },
      isDev: false,
      organization: "therockstorm",
      repository: "nestjs-poc",
    });
  }
}
