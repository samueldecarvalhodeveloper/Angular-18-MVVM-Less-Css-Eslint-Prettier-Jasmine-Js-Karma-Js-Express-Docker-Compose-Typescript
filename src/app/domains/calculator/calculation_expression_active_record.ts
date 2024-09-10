import CalculationExpressionRegister from "./calculation_expression_register";
import CalculatorCharacters from "./calculator_characters";
import ExpressionEvaluater from "./infrastructure/anticorruption_layer/expression_evaluater";
import CalculatorFormatter from "./infrastructure/calculator_formatter";

class CalculationExpressionActiveRecord {
  private readonly calculationExpressionRegister: CalculationExpressionRegister;

  public constructor(
    calculationExpressionRegister: CalculationExpressionRegister,
  ) {
    this.calculationExpressionRegister = calculationExpressionRegister;
  }

  public getCalculationExpression(): string {
    return this.calculationExpressionRegister.getCalculationExpression();
  }

  public addCharacterToCalculationExpression(
    character: CalculatorCharacters,
  ): void {
    this.calculationExpressionRegister.addCharacterToCalculationExpression(
      character,
    );
  }

  public removeLastCharacterFromCalculationExpression(): void {
    const currentCalculationExpression: string =
      this.calculationExpressionRegister.getCalculationExpression();
    const currentCalculationExpressionWithoutLastCharacter: string =
      CalculatorFormatter.getCalculationExpressionWithoutLastCharacter(
        currentCalculationExpression,
      );

    this.calculationExpressionRegister.setCalculationExpression(
      currentCalculationExpressionWithoutLastCharacter,
    );
  }

  public turnCalculationExpressionEmpty(): void {
    this.calculationExpressionRegister.setCalculationExpression("");
  }

  public evaluateCalculationExpression(): void {
    const currentCalculationExpression: string =
      this.calculationExpressionRegister.getCalculationExpression();
    const evaluatedCalculationExpression: string =
      ExpressionEvaluater.getEvaluatedExpression(currentCalculationExpression);

    this.calculationExpressionRegister.setCalculationExpression(
      evaluatedCalculationExpression,
    );
  }
}

export default CalculationExpressionActiveRecord;
