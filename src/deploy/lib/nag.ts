import { IAspect } from "aws-cdk-lib";
import { AwsSolutionsChecks } from "cdk-nag";

type GetNagPacksReq = Readonly<{
  verbose: boolean;
}>;

export function getNagPacks({ verbose }: GetNagPacksReq): IAspect[] {
  return [new AwsSolutionsChecks({ verbose })];
}
