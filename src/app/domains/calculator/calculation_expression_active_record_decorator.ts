import CalculationExpressionActiveRecord from "./calculation_expression_active_record";
import CalculationExpressionRegister from "./calculation_expression_register";
import CalculatorCharacters from "./calculator_characters";
import CalculatorSpecifications from "./infrastructure/calculator_specifications";

class CalculationExpressionActiveRecordDecorator extends CalculationExpressionActiveRecord {
  public constructor(
    calculationExpressionRegister: CalculationExpressionRegister,
  ) {
    super(calculationExpressionRegister);
  }

  public override addCharacterToCalculationExpression(
    character: CalculatorCharacters,
  ): void {
    const currentExpression: string = super.getCalculationExpression();

    if (
      CalculatorSpecifications.isCalculationExpressionEqualToNotValidExpressionExceptionMessage(
        currentExpression,
      ) ||
      CalculatorSpecifications.isCalculationExpressionInfinity(
        currentExpression,
      )
    ) {
      super.turnCalculationExpressionEmpty();
    } else {
      super.addCharacterToCalculationExpression(character);
    }
  }

  public override removeLastCharacterFromCalculationExpression(): void {
    const currentExpression: string = super.getCalculationExpression();

    if (
      CalculatorSpecifications.isCalculationExpressionEqualToNotValidExpressionExceptionMessage(
        currentExpression,
      ) ||
      CalculatorSpecifications.isCalculationExpressionInfinity(
        currentExpression,
      )
    ) {
      super.turnCalculationExpressionEmpty();
    } else if (
      CalculatorSpecifications.isCalculationExpressionEmpty(currentExpression)
    ) {
      return;
    } else {
      super.removeLastCharacterFromCalculationExpression();
    }
  }

  public override evaluateCalculationExpression(): void {
    const currentExpression: string = super.getCalculationExpression();

    if (
      CalculatorSpecifications.isCalculationExpressionEqualToNotValidExpressionExceptionMessage(
        currentExpression,
      ) ||
      CalculatorSpecifications.isCalculationExpressionInfinity(
        currentExpression,
      )
    ) {
      super.turnCalculationExpressionEmpty();
    } else if (
      CalculatorSpecifications.isCalculationExpressionEmpty(currentExpression)
    ) {
      return;
    } else {
      super.evaluateCalculationExpression();
    }
  }
}

export default CalculationExpressionActiveRecordDecorator;
