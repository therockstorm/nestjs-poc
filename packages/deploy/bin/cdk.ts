#!/usr/bin/env node
import "source-map-support/register";

import * as cdk from "aws-cdk-lib";

import { ENV } from "../src/lib/constants";
import { resourceId } from "../src/lib/resource-id";
import { NestJsPocStack } from "../src/NestJsPocStack";
import { SecurityStack } from "../src/SecurityStack";

const app = new cdk.App();
const props = { env: ENV };

new SecurityStack(app, stack(SecurityStack.project), props);
new NestJsPocStack(app, stack(NestJsPocStack.project), props);

function stack(name: string) {
  return resourceId({ name, resource: "stack" });
}
