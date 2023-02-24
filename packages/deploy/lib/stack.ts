import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

export class NestJsPocStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
  }
}

export interface ResourceIdReq {
  /**
   * A friendly camelCase name to distinguish from others of the same resource
   * type. Doesn't have to be unique unless AWS requires it.
   */
  readonly name: string;

  /**
   * The camelCase AWS resource you're creating, e.g., `stack`, `bucket`.
   */
  readonly resource: string;
}
