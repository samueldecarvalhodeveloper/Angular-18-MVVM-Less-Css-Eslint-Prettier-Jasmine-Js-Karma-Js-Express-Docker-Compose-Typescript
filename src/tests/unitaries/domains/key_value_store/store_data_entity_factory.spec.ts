import CalculatorCharacters from "../../../../app/domains/calculator/calculator_characters";
import StoreDataEntity from "../../../../app/domains/key_value_store/infrastructure/entities/store_data_entity";
import StoreDataEntityFactory from "../../../../app/domains/key_value_store/store_data_entity_factory";

describe('Test Class: "StoreDataEntityFactory" Behavior', () => {
  it('If Test Method "getInstance" Instantiates A StoreDataEntity', () => {
    const storeDataEntity: StoreDataEntity = StoreDataEntityFactory.getInstance(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    expect(storeDataEntity.data).toEqual(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );
  });
});
