import { thrw } from "./thrw";

export function required<T>(name: string, val?: T): T | never {
  return val || thrw(`${name} required`);
}
