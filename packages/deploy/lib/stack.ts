// import * as apprunner from "@aws-cdk/aws-apprunner-alpha";
import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

export class NestJsPocStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // new apprunner.Service(this, "Service", {
    //   source: apprunner.Source.fromGitHub({
    //     branch: "main",
    //     configurationSource: apprunner.ConfigurationSourceType.REPOSITORY,
    //     connection:
    //       apprunner.GitHubConnection.fromConnectionArn("CONNECTION_ARN"),
    //     repositoryUrl: "https://github.com/aws-containers/hello-app-runner",
    //   }),
    // });
  }
}
