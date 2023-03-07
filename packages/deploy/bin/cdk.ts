#!/usr/bin/env node
import "source-map-support/register";

import { App } from "aws-cdk-lib";
// eslint-disable-next-line n/file-extension-in-import
import { ShellStep } from "aws-cdk-lib/pipelines";
import { AwsCredentials, GitHubWorkflow } from "cdk-pipelines-github";

import { ENV } from "../src/lib/constants";
import { resourceId } from "../src/lib/resource-id";
import { NestJsPocStage } from "../src/stage";

const app = new App();

const pipeline = new GitHubWorkflow(
  app,
  resourceId({ name: "nestJsPoc", resource: "pipeline" }),
  {
    awsCreds: AwsCredentials.fromOpenIdConnect({
      gitHubActionRoleArn:
        "arn:aws:iam::673013582138:role/SecurityStack-GitHubRoleECD51173-10013MCDEI87A",
    }),
    synth: new ShellStep("Build", {
      commands: [
        "npm ci",
        "npm run lint",
        "npm run --workspace deploy cdk -- synth",
      ],
    }),
    workflowPath: "../../.github/workflows/deploy.yml",
  }
);

const devStage = new NestJsPocStage(app, "Dev", { env: ENV });

pipeline.addStage(devStage);

app.synth();
