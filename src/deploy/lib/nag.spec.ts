import { AwsSolutionsChecks } from "cdk-nag";

import { getNagPacks } from "./nag";

describe(getNagPacks, () => {
  it("returns array", () => {
    const verbose = true;
    expect(getNagPacks({ verbose })).toEqual([
      new AwsSolutionsChecks({ verbose }),
    ]);
  });
});
