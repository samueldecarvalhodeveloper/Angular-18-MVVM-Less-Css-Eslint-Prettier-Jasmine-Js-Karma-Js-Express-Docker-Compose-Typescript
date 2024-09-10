import { LAST_SESSION_CALCULATION_KEY } from "../../constants/domains/calculator_constants";
import KeyValueStore from "../../domains/key_value_store/key_value_store";

class LastSessionCalculationExpressionStore {
  private constructor() {}

  public static getExpression(): string {
    try {
      return KeyValueStore.getItem(LAST_SESSION_CALCULATION_KEY) as string;
    } catch (error) {
      return "";
    }
  }

  public static setExpression(value: string): void {
    KeyValueStore.setItem(LAST_SESSION_CALCULATION_KEY, value);
  }
}

export default LastSessionCalculationExpressionStore;
