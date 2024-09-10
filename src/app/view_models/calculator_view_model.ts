import Calculator from "../domains/calculator/calculator";
import CalculatorCharacters from "../domains/calculator/calculator_characters";
import LastSessionCalculationExpressionStore from "../infrastructure/anticorruption_layer/last_session_calculation_expression_store";

class CalculatorViewModel {
  private readonly calculator: Calculator;

  public constructor(calculator: Calculator) {
    this.calculator = calculator;
  }

  public getCalculationExpression(): string {
    return this.calculator.getExpression();
  }

  public addCharacterToCalculationExpression(
    character: CalculatorCharacters,
  ): void {
    const currentCalculationExpression: string =
      this.calculator.getExpression();

    const calculationExpressionWithNewCharacter: string =
      currentCalculationExpression + character;

    LastSessionCalculationExpressionStore.setExpression(
      calculationExpressionWithNewCharacter,
    );

    this.calculator.addCharacter(character);
  }

  public backspaceCalculationExpression(): void {
    this.calculator.backspace();

    const currentCalculationExpression: string =
      this.calculator.getExpression();

    LastSessionCalculationExpressionStore.setExpression(
      currentCalculationExpression,
    );
  }

  public cleanCalculationExpression(): void {
    this.calculator.clean();

    LastSessionCalculationExpressionStore.setExpression("");
  }

  public evaluateCalculationExpression(): void {
    this.calculator.evaluate();

    const currentCalculationExpression: string =
      this.calculator.getExpression();

    LastSessionCalculationExpressionStore.setExpression(
      currentCalculationExpression,
    );
  }
}

export default CalculatorViewModel;
