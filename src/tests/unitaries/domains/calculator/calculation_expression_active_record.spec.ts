import CalculationExpression from "../../../../app/domains/calculator/calculation_expression";
import CalculationExpressionActiveRecord from "../../../../app/domains/calculator/calculation_expression_active_record";
import CalculationExpressionRegister from "../../../../app/domains/calculator/calculation_expression_register";
import CalculatorCharacters from "../../../../app/domains/calculator/calculator_characters";

describe('Test Class "CalculationExpressionActiveRecord" Behavior', () => {
  let calculationExpressionActiveRecord: CalculationExpressionActiveRecord;
  let calculationExpressionRegister: CalculationExpressionRegister;

  beforeAll(() => {
    const calculationExpression: CalculationExpression =
      new CalculationExpression("");
    calculationExpressionRegister = new CalculationExpressionRegister(
      calculationExpression,
    );
    calculationExpressionActiveRecord = new CalculationExpressionActiveRecord(
      calculationExpressionRegister,
    );
  });

  beforeEach(() => {
    calculationExpressionRegister.setCalculationExpression("");
  });

  it('Test If Method "getCalculationExpression" Returns Current Calculation Expression', () => {
    const currentCalculationExpression =
      calculationExpressionActiveRecord.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  it('Test If Method "removeLastCharacterFromCalculationExpression" Removes Calculation Expression Last Character', () => {
    calculationExpressionRegister.setCalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    calculationExpressionActiveRecord.removeLastCharacterFromCalculationExpression();

    const expressionWithoutLastCharacter =
      calculationExpressionRegister.getCalculationExpression();

    expect(expressionWithoutLastCharacter).toEqual(
      CalculatorCharacters.ONE + CalculatorCharacters.ADDITION,
    );
  });

  it('Test if Method "turnCalculationExpressionEmpty" Removes All Characters From Calculation Expression', () => {
    calculationExpressionRegister.setCalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    calculationExpressionActiveRecord.turnCalculationExpressionEmpty();

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  it('Test if Method "evaluateCalculationExpression" Evaluates Calculation Expression', () => {
    calculationExpressionRegister.setCalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    calculationExpressionActiveRecord.evaluateCalculationExpression();

    const evaluatedCalculationExpression: string =
      calculationExpressionRegister.getCalculationExpression();

    expect(evaluatedCalculationExpression).toEqual(CalculatorCharacters.TWO);
  });
});
