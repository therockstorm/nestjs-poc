import * as apprunner from "@aws-cdk/aws-apprunner-alpha";
import { Stack, type StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";

import { AppRunnerService } from "./constructs/app-runner-service";

export class NestJsPocStack extends Stack {
  public static get project() {
    return "nestJsPoc";
  }

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new AppRunnerService({
      ctx: { name: NestJsPocStack.project, scope: this },
      source: apprunner.Source.fromGitHub({
        branch: "main",
        codeConfigurationValues: {
          buildCommand: "npm install && npm run build",
          port: "3000",
          runtime: apprunner.Runtime.NODEJS_16,
          startCommand: "npm run start:prod",
        },
        configurationSource: apprunner.ConfigurationSourceType.API,
        connection: apprunner.GitHubConnection.fromConnectionArn(
          `arn:aws:apprunner:us-west-2:673013582138:connection/app-runner-github-connection/3cabc09630f44a92bae6e825180ef0b3`
        ),
        repositoryUrl: "https://github.com/therockstorm/nestjs-poc/",
      }),
    });
  }
}
