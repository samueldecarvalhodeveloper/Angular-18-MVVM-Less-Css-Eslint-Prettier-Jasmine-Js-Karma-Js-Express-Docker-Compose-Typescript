class CalculationExpression {
  private calculationExpression: string;

  public constructor(calculationExpression: string) {
    this.calculationExpression = calculationExpression;
  }

  public getCalculationExpression(): string {
    return this.calculationExpression;
  }

  public setCalculationExpression(calculationExpression: string) {
    this.calculationExpression = calculationExpression;
  }
}

export default CalculationExpression;
