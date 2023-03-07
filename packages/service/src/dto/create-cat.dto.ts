export class CreateCatDto {
  /**
   * Cat's age.
   * @example 3
   */
  age!: number;

  /**
   * Cat's name.
   * @example "Garfield"
   */
  name!: string;

  /**
   * Cat's breed.
   * @example "Orange Persian Tabby"
   */
  breed!: string;
}
