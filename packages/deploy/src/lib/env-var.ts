import { required } from "./required";

export function envVar(name: string): string {
  return required(name, process.env[name]);
}
