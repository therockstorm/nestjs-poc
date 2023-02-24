import * as apprunner from "@aws-cdk/aws-apprunner-alpha";

import { resourceId } from "../lib/resource-id";
import { BaseProps } from "./BaseProps";

export class AppRunnerService extends apprunner.Service {
  constructor({
    ctx: { name, scope },
    ...rest
  }: BaseProps & apprunner.ServiceProps) {
    super(scope, resourceId({ name, resource: "service" }), rest);
  }
}
