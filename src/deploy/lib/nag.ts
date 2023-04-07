import type { IAspect } from "aws-cdk-lib";
import { AwsSolutionsChecks } from "cdk-nag";

type GetNagPacksRequest = Readonly<{
  verbose: boolean;
}>;

export function getNagPacks({ verbose }: GetNagPacksRequest): IAspect[] {
  return [new AwsSolutionsChecks({ verbose })];
}
