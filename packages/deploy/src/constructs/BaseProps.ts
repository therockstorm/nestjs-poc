import { Construct } from "constructs";

export type BaseProps<ScopeT = Construct, NameT = string> = Readonly<{
  ctx: Readonly<{
    name: NameT;
    scope: ScopeT;
  }>;
}>;
