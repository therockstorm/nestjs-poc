import { thrw } from "./thrw";

export function required<T>(name: string, value?: T): T | never {
  return value ?? thrw(`${name} required`);
}
