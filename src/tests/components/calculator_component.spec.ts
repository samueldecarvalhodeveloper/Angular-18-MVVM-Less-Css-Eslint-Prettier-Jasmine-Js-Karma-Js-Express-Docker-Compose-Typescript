import CalculationExpression from "../../app/domains/calculator/calculation_expression";
import CalculationExpressionActiveRecord from "../../app/domains/calculator/calculation_expression_active_record";
import CalculationExpressionActiveRecordDecorator from "../../app/domains/calculator/calculation_expression_active_record_decorator";
import CalculationExpressionRegister from "../../app/domains/calculator/calculation_expression_register";
import Calculator from "../../app/domains/calculator/calculator";
import CalculatorCharacters from "../../app/domains/calculator/calculator_characters";

describe('Test Component "Calculator" Behavior', () => {
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

  it("Test If Component Handles Data Input And Output Scenario", () => {
    calculator.addCharacter(CalculatorCharacters.ONE);
    calculator.addCharacter(CalculatorCharacters.ADDITION);
    calculator.addCharacter(CalculatorCharacters.ONE);

    calculator.backspace();

    calculator.addCharacter(CalculatorCharacters.ONE);

    calculator.evaluate();

    const evaluatedCalculationExpression = calculator.getExpression();

    expect(evaluatedCalculationExpression).toEqual(CalculatorCharacters.TWO);

    calculator.clean();

    const cleanedCalculationExpression = calculator.getExpression();

    expect(cleanedCalculationExpression).toEqual("");
  });
});
