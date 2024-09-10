import { LAST_SESSION_CALCULATION_KEY } from "../../app/constants/domains/calculator_constants";
import CalculationExpression from "../../app/domains/calculator/calculation_expression";
import CalculationExpressionActiveRecord from "../../app/domains/calculator/calculation_expression_active_record";
import CalculationExpressionActiveRecordDecorator from "../../app/domains/calculator/calculation_expression_active_record_decorator";
import CalculationExpressionRegister from "../../app/domains/calculator/calculation_expression_register";
import Calculator from "../../app/domains/calculator/calculator";
import CalculatorCharacters from "../../app/domains/calculator/calculator_characters";
import KeyValueStore from "../../app/domains/key_value_store/key_value_store";

describe('Test If Integration Of "Calculation Expression Storing" Behavior', () => {
  let calculator: Calculator;
  let calculationExpressionActiveRecord: CalculationExpressionActiveRecord;

  beforeAll(() => {
    const calculationExpression: CalculationExpression =
      new CalculationExpression("");
    const calculationExpressionRegister: CalculationExpressionRegister =
      new CalculationExpressionRegister(calculationExpression);
    calculationExpressionActiveRecord =
      new CalculationExpressionActiveRecordDecorator(
        calculationExpressionRegister,
      );

    calculator = new Calculator(calculationExpressionActiveRecord);
  });

  beforeEach(() => {
    calculationExpressionActiveRecord.turnCalculationExpressionEmpty();
  });

  it("Test If KeyValueStore Class Stores Current Calculation Expression From Calculator", () => {
    calculator.addCharacter(CalculatorCharacters.ONE);
    calculator.addCharacter(CalculatorCharacters.ADDITION);
    calculator.addCharacter(CalculatorCharacters.ONE);

    const currentCalculationExpression = calculator.getExpression();

    KeyValueStore.setItem(
      LAST_SESSION_CALCULATION_KEY,
      currentCalculationExpression,
    );

    const storedCalculationExpression = KeyValueStore.getItem(
      LAST_SESSION_CALCULATION_KEY,
    );

    expect(storedCalculationExpression).toEqual(currentCalculationExpression);
  });
});
