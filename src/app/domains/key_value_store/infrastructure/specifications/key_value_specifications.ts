class KeyValueSpecifications {
  private constructor() {}

  public static isStringifiedDataFromStoreAnEmptyString(
    stringifiedDataFromStored: string | null,
  ): boolean {
    return stringifiedDataFromStored === "";
  }
}

export default KeyValueSpecifications;
