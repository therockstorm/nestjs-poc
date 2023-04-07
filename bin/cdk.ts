#!/usr/bin/env node

import "source-map-support/register";

import { App, Aspects } from "aws-cdk-lib";
// eslint-disable-next-line n/file-extension-in-import
import { ShellStep } from "aws-cdk-lib/pipelines";
import { AwsCredentials, GitHubWorkflow } from "cdk-pipelines-github";

import { ENV } from "../src/deploy/lib/constants";
import { getNagPacks } from "../src/deploy/lib/nag";
import { resourceId } from "../src/deploy/lib/resource-id";
import { NestJsPocStage } from "../src/deploy/stage";

const app = new App({ analyticsReporting: false });
for (const c of getNagPacks({ verbose: true })) Aspects.of(app).add(c);

const pipeline = new GitHubWorkflow(
  app,
  resourceId({ name: "nestJsPoc", resource: "pipeline" }),
  {
    awsCreds: AwsCredentials.fromOpenIdConnect({
      gitHubActionRoleArn:
        "arn:aws:iam::673013582138:role/Dev-SecurityStack-GitHubRoleECD51173-190F3KKBIE0RY",
    }),
    synth: new ShellStep("Build", {
      commands: ["npm ci", "npm run cdk -- synth"],
    }),
  }
);

const devStage = new NestJsPocStage(app, "Dev", { env: ENV });
pipeline.addStage(devStage);

app.synth();
