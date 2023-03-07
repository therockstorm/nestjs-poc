import { Stage, type StageProps } from "aws-cdk-lib";
import type { Construct } from "constructs";

import { resourceId } from "./lib/resource-id";
import { NestJsPocStack } from "./nestjs-poc-stack";
import { SecurityStack } from "./security-stack";

export class NestJsPocStage extends Stage {
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    new SecurityStack(this, stack(SecurityStack.project), props);
    new NestJsPocStack(this, stack(NestJsPocStack.project), props);
  }
}

function stack(name: string) {
  return resourceId({ name, resource: "stack" });
}
