import CalculationExpression from "../../../../app/domains/calculator/calculation_expression";
import CalculatorCharacters from "../../../../app/domains/calculator/calculator_characters";

describe('Test Class "CalculationExpression" Behavior', () => {
  it("Test How Calculation Expression Should be Used On Client", () => {
    const calculationExpression = new CalculationExpression("");

    const initialCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(initialCalculationExpression).toEqual("");

    calculationExpression.setCalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    const updateCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(updateCalculationExpression).toEqual(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );
  });
});
