import { aws_iam as iam } from "aws-cdk-lib";

import { resourceId } from "../lib/resource-id";
import { BaseProps } from "./BaseProps";

export class Role extends iam.Role {
  constructor({ ctx: { name, scope }, ...rest }: BaseProps & iam.RoleProps) {
    super(scope, resourceId({ name, resource: "role" }), rest);
  }
}
