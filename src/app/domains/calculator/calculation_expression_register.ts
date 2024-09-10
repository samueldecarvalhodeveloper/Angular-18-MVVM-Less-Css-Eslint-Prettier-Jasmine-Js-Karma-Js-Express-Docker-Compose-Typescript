import CalculationExpression from "./calculation_expression";
import CalculatorCharacters from "./calculator_characters";

class CalculationExpressionRegister {
  private readonly calculationExpression: CalculationExpression;

  constructor(calculationExpression: CalculationExpression) {
    this.calculationExpression = calculationExpression;
  }

  public getCalculationExpression(): string {
    return this.calculationExpression.getCalculationExpression();
  }

  public setCalculationExpression(newExpression: string): void {
    this.calculationExpression.setCalculationExpression(newExpression);
  }

  public addCharacterToCalculationExpression(
    calculatorCharacters: CalculatorCharacters,
  ): void {
    const currentCalculationExpression: string =
      this.calculationExpression.getCalculationExpression();
    const calculationResultWithNewCharacter: string =
      currentCalculationExpression + calculatorCharacters;

    this.calculationExpression.setCalculationExpression(
      calculationResultWithNewCharacter,
    );
  }
}

export default CalculationExpressionRegister;
