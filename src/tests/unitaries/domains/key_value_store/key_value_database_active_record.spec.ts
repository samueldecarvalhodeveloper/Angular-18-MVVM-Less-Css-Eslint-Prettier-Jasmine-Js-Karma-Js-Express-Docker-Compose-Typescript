import {
  LAST_CALCULATION_VALUE,
  LAST_SESSION_CALCULATION_KEY,
} from "../../../../app/constants/domains/calculator_constants";
import KeyValueDatabase from "../../../../app/domains/key_value_store/infrastructure/anticorruption_layer/key_value_database";
import StoreDataEntity from "../../../../app/domains/key_value_store/infrastructure/entities/store_data_entity";
import { StoreValue } from "../../../../app/domains/key_value_store/infrastructure/environment/typescript/types";
import KeyValueDatabaseActiveRecord from "../../../../app/domains/key_value_store/key_value_database_active_record";
import StoreDataEntityFactory from "../../../../app/domains/key_value_store/store_data_entity_factory";

describe('Test Class "KeyValueDatabaseActiveRecord" Behavior', () => {
  it('Test If Method "setItem" Creates Data In Key value Database', () => {
    KeyValueDatabaseActiveRecord.setItem(
      LAST_SESSION_CALCULATION_KEY,
      LAST_CALCULATION_VALUE,
    );

    const stringifiedJsonFromStoredData: string =
      KeyValueDatabase.getSelectedKeyData(LAST_SESSION_CALCULATION_KEY);

    const parsedJsonFromStoredData: StoreDataEntity = JSON.parse(
      stringifiedJsonFromStoredData,
    );

    expect(parsedJsonFromStoredData.data).toEqual(LAST_CALCULATION_VALUE);
  });

  it('Test If Method "getKeyData" Returns The Stored Value From Key value Database', () => {
    const storeDataToBeStored: StoreDataEntity =
      StoreDataEntityFactory.getInstance(LAST_CALCULATION_VALUE);
    const storeDataToBeStoredJsonStringified: string =
      JSON.stringify(storeDataToBeStored);

    KeyValueDatabase.setItem(
      LAST_SESSION_CALCULATION_KEY,
      storeDataToBeStoredJsonStringified,
    );

    const dataFromKeyValueDatabase: StoreValue =
      KeyValueDatabaseActiveRecord.getKeyData(LAST_SESSION_CALCULATION_KEY);

    expect(dataFromKeyValueDatabase).toEqual(LAST_CALCULATION_VALUE);
  });
});
