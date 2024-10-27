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

  it("Test Getting Calculation Expression", () => {
    const currentCalculationExpressionFromCalculationExpressionActiveRecord =
      calculator.getExpression();
    const currentCalculationExpressionFromCalculator =
      calculator.getExpression();

    expect(currentCalculationExpressionFromCalculator).toEqual(
      currentCalculationExpressionFromCalculationExpressionActiveRecord,
    );
  });

  it("Test Adding Chose Character On Calculation Expression", () => {
    calculator.addCharacter(CalculatorCharacters.ONE);

    const currentCalculationExpression =
      calculationExpressionActiveRecord.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(CalculatorCharacters.ONE);
  });

  it("Test Removing Last Character Of Calculation Expression", () => {
    calculationExpressionActiveRecord.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );
    calculationExpressionActiveRecord.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    calculator.backspace();

    const currentCalculationExpression =
      calculationExpressionActiveRecord.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(CalculatorCharacters.ONE);
  });

  it("Test Removing All Character From Calculation Expression", () => {
    calculationExpressionActiveRecord.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );
    calculationExpressionActiveRecord.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    calculator.clean();

    const currentCalculationExpression =
      calculationExpressionActiveRecord.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  it("Test Evaluating Calculation Expression", () => {
    calculationExpressionActiveRecord.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );
    calculationExpressionActiveRecord.addCharacterToCalculationExpression(
      CalculatorCharacters.ADDITION,
    );
    calculationExpressionActiveRecord.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    calculator.evaluate();

    const currentCalculationExpression =
      calculationExpressionActiveRecord.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(CalculatorCharacters.TWO);
  });
});
