import { StoreValue } from "./infrastructure/environment/typescript/types";
import StoreDataEntity from "./infrastructure/entities/store_data_entity";
import StoreDataEntityFactory from "./store_data_entity_factory";
import KeyValueDatabase from "./infrastructure/anticorruption_layer/key_value_database";
import JsonTransformer from "./infrastructure/anticorruption_layer/json_transformer";

class KeyValueDatabaseActiveRecord {
  private constructor() {}

  public static getKeyData(key: string): StoreValue {
    const stringifiedJsonOfDataFromDatabase =
      KeyValueDatabase.getSelectedKeyData(key);
    const parsedJsonFromStoredData: StoreDataEntity =
      JsonTransformer.getRealObjectFromJsonString<StoreDataEntity>(
        stringifiedJsonOfDataFromDatabase,
      );
    return parsedJsonFromStoredData.data;
  }

  public static setItem(key: string, value: StoreValue): void {
    const dataToBeStored: StoreDataEntity =
      StoreDataEntityFactory.getInstance(value);
    const stringifiedJsonOfDataToBeStored: string =
      JsonTransformer.getJsonStringFromRealObject(dataToBeStored);

    KeyValueDatabase.setItem(key, stringifiedJsonOfDataToBeStored);
  }
}

export default KeyValueDatabaseActiveRecord;
