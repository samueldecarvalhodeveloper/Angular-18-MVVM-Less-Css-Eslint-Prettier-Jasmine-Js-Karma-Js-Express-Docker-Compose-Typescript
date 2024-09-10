class CalculatorFormatter {
  private constructor() {}

  public static getCalculationExpressionWithoutLastCharacter(
    expression: string,
  ): string {
    return expression.slice(0, -1);
  }
}

export default CalculatorFormatter;
