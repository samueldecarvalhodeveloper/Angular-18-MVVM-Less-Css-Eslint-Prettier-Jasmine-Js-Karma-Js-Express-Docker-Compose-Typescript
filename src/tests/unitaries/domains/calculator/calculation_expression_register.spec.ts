import CalculationExpression from "../../../../app/domains/calculator/calculation_expression";
import CalculationExpressionRegister from "../../../../app/domains/calculator/calculation_expression_register";
import CalculatorCharacters from "../../../../app/domains/calculator/calculator_characters";

describe('Test Class "CalculationExpressionRegister" Behavior', () => {
  let calculationExpression: CalculationExpression;
  let calculationExpressionRegister: CalculationExpressionRegister;

  beforeAll(() => {
    calculationExpression = new CalculationExpression("");
    calculationExpressionRegister = new CalculationExpressionRegister(
      calculationExpression,
    );
  });

  beforeEach(() => {
    calculationExpression.setCalculationExpression("");
  });

  it('Test If Method "getCalculationExpression" Returns Current Calculation Expression', () => {
    calculationExpression.setCalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );
  });

  it('Test If Method "setCalculationExpression" Sets Calculation Expression', () => {
    calculationExpressionRegister.setCalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );
  });

  it('Test If Method "addCharacterToCalculationExpression" Add Chose Character To Calculation Expression', () => {
    calculationExpressionRegister.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(CalculatorCharacters.ONE);
  });
});
