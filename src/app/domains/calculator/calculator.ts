import CalculationExpressionActiveRecord from "./calculation_expression_active_record";
import CalculatorCharacters from "./calculator_characters";

class Calculator {
  private readonly calculationExpressionActiveRecord: CalculationExpressionActiveRecord;

  public constructor(
    calculationExpressionActiveRecord: CalculationExpressionActiveRecord,
  ) {
    this.calculationExpressionActiveRecord = calculationExpressionActiveRecord;
  }

  public getExpression(): string {
    return this.calculationExpressionActiveRecord.getCalculationExpression();
  }

  public addCharacter(character: CalculatorCharacters): void {
    this.calculationExpressionActiveRecord.addCharacterToCalculationExpression(
      character,
    );
  }

  public backspace(): void {
    this.calculationExpressionActiveRecord.removeLastCharacterFromCalculationExpression();
  }

  public clean(): void {
    this.calculationExpressionActiveRecord.turnCalculationExpressionEmpty();
  }

  public evaluate(): void {
    this.calculationExpressionActiveRecord.evaluateCalculationExpression();
  }
}

export default Calculator;
