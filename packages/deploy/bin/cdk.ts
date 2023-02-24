#!/usr/bin/env node
import "source-map-support/register";

import * as cdk from "aws-cdk-lib";

import { NestJsPocStack } from "../lib/stack";

const app = new cdk.App();
new NestJsPocStack(app, "NestJsPocStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
