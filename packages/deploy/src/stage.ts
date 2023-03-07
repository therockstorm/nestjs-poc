import { GitHubStage, type GitHubStageProps } from "cdk-pipelines-github";
import type { Construct } from "constructs";

import { resourceId } from "./lib/resource-id";
import { NestJsPocStack } from "./nestjs-poc-stack";
import { SecurityStack } from "./security-stack";

export class NestJsPocStage extends GitHubStage {
  constructor(scope: Construct, id: string, props?: GitHubStageProps) {
    super(scope, id, props);

    new SecurityStack(this, stack(SecurityStack.project), props);
    new NestJsPocStack(this, stack(NestJsPocStack.project), props);
  }
}

function stack(name: string) {
  return resourceId({ name, resource: "stack" });
}
