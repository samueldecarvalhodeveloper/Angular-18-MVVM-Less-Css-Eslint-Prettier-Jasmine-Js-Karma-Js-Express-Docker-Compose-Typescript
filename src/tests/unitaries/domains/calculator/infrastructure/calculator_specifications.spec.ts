import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../../../app/constants/domains/calculator_constants";
import CalculatorCharacters from "../../../../../app/domains/calculator/calculator_characters";
import CalculatorSpecifications from "../../../../../app/domains/calculator/infrastructure/calculator_specifications";

describe('Test Class "CalculatorSpecifications" Behavior', () => {
  it('Test If Method "isCalculationExpressionEqualToNotValidExpressionExceptionMessage" Returns True If Expression Is Equal To Not Valid Expression Exception Message', () => {
    const expressionIsNotValidExpressionExceptionMessage =
      CalculatorSpecifications.isCalculationExpressionEqualToNotValidExpressionExceptionMessage(
        NOT_VALID_EXPRESSION_ERROR_MESSAGE,
      );
    const expressionIsNotNotValidExpressionExceptionMessage =
      CalculatorSpecifications.isCalculationExpressionEqualToNotValidExpressionExceptionMessage(
        CalculatorCharacters.ONE +
          CalculatorCharacters.ADDITION +
          CalculatorCharacters.ONE,
      );

    expect(expressionIsNotValidExpressionExceptionMessage).toBeTruthy();
    expect(expressionIsNotNotValidExpressionExceptionMessage).toBeFalsy();
  });

  it('Test If Method "isCalculationExpressionEmpty" Returns True If Calculation Expression Is Empty', () => {
    const calculationExpressionIsEmpty: boolean =
      CalculatorSpecifications.isCalculationExpressionEmpty("");
    const calculationExpressionIsNotEmpty: boolean =
      CalculatorSpecifications.isCalculationExpressionEmpty(
        CalculatorCharacters.ONE +
          CalculatorCharacters.ADDITION +
          CalculatorCharacters.ONE,
      );

    expect(calculationExpressionIsEmpty).toBeTruthy();
    expect(calculationExpressionIsNotEmpty).toBeFalsy();
  });

  it('Test If Method "isCalculationExpressionInfinity" Returns True If Calculation Expression Is Infinity', () => {
    const calculationExpressionIsInfinity: boolean =
      CalculatorSpecifications.isCalculationExpressionInfinity(
        Infinity.toString(),
      );
    const calculationExpressionIsNotInfinity: boolean =
      CalculatorSpecifications.isCalculationExpressionInfinity(
        CalculatorCharacters.ONE +
          CalculatorCharacters.ADDITION +
          CalculatorCharacters.ONE,
      );

    expect(calculationExpressionIsInfinity).toBeTruthy();
    expect(calculationExpressionIsNotInfinity).toBeFalsy();
  });
});
