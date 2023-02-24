import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

import { GitHubProvider } from "./constructs/GitHubProvider";

export class SecurityStack extends Stack {
  public static readonly project = "security";

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
