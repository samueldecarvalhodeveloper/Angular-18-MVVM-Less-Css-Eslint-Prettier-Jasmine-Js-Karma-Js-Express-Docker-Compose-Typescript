import { StoreValue } from "./infrastructure/environment/typescript/types";
import KeyValueDatabaseActiveRecord from "./key_value_database_active_record";

class KeyValueStore {
  private constructor() {}

  public static setItem(key: string, value: StoreValue): void {
    KeyValueDatabaseActiveRecord.setItem(key, value);
  }

  public static getItem(key: string): StoreValue {
    return KeyValueDatabaseActiveRecord.getKeyData(key);
  }
}

export default KeyValueStore;
