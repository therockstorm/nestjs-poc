import { camelCase } from "camel-case";
import { upperCaseFirst } from "upper-case-first";

export type ResourceIdReq = Readonly<{
  /**
   * A friendly camelCase name to distinguish from others of the same resource
   * type. Doesn't have to be unique unless AWS requires it.
   */
  name: string;

  /**
   * The camelCase AWS resource you're creating, e.g., `stack`, `bucket`.
   */
  resource: string;
}>;

export function resourceId({ name, resource }: ResourceIdReq): string {
  return upperCamelCase(`${name}${upperCamelCase(resource)}`);
}

function upperCamelCase(str: string): string {
  return upperCaseFirst(camelCase(str));
}
