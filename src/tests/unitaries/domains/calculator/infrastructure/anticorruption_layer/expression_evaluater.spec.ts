import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../../../../app/constants/domains/calculator_constants";
import CalculatorCharacters from "../../../../../../app/domains/calculator/calculator_characters";
import ExpressionEvaluater from "../../../../../../app/domains/calculator/infrastructure/anticorruption_layer/expression_evaluater";

describe('Test Class "ExpressionEvaluater" Behavior', () => {
  it('Test If Method "getEvaluatedExpression" Returns Evaluated Expression', () => {
    const evaluatedExpression: string =
      ExpressionEvaluater.getEvaluatedExpression(
        CalculatorCharacters.ONE +
          CalculatorCharacters.ADDITION +
          CalculatorCharacters.ONE,
      );

    expect(evaluatedExpression).toEqual(CalculatorCharacters.TWO);
  });

  it('Test If Method "getEvaluatedExpression" Returns Not Valid Expression Exception If Expression Is Not Valid', () => {
    const evaluatedExpression = ExpressionEvaluater.getEvaluatedExpression(
      CalculatorCharacters.ADDITION,
    );

    expect(evaluatedExpression).toEqual(NOT_VALID_EXPRESSION_ERROR_MESSAGE);
  });
});
