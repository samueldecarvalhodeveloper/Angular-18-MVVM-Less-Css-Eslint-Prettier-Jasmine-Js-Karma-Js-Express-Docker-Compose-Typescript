import KeyValueSpecifications from "../specifications/key_value_specifications";
import NotExistingItemError from "../errors/not_existing_item_error";

class KeyValueDatabase {
  private constructor() {}

  public static setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
    localStorage.setItem(key, value);
  }

  public static getSelectedKeyData(key: string): string {
    const dataFromKeyValueDatabase: string = localStorage.getItem(key) ?? "";

    if (
      KeyValueSpecifications.isStringifiedDataFromStoreAnEmptyString(
        dataFromKeyValueDatabase,
      )
    ) {
      throw new NotExistingItemError(key);
    }

    return dataFromKeyValueDatabase;
  }
}

export default KeyValueDatabase;
