import { LAST_CALCULATION_VALUE } from "../../../../../../app/constants/domains/calculator_constants";
import StoreDataEntity from "../../../../../../app/domains/key_value_store/infrastructure/entities/store_data_entity";

describe('Test Class "StoreDataEntity" Behavior', () => {
  it("Test If Entity Describes How A Store Data Should Look Correctly", () => {
    const storeDataEntity: StoreDataEntity = new StoreDataEntity(
      LAST_CALCULATION_VALUE,
    );

    expect(storeDataEntity.data).toEqual(LAST_CALCULATION_VALUE);
  });
});
