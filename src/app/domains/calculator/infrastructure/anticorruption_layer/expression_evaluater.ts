import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../../constants/domains/calculator_constants";

class ExpressionEvaluater {
  private constructor() {}

  public static getEvaluatedExpression(expression: string): string {
    try {
      return (eval(expression) as number).toString();
    } catch (error) {
      return NOT_VALID_EXPRESSION_ERROR_MESSAGE;
    }
  }
}

export default ExpressionEvaluater;
