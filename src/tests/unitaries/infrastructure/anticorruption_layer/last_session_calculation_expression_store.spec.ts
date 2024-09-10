import { LAST_SESSION_CALCULATION_KEY } from "../../../../app/constants/domains/calculator_constants";
import { SIMPLE_CALCULATOR_CALCULATION_EXPRESSION } from "../../../../app/constants/user_interface_constants";
import KeyValueStore from "../../../../app/domains/key_value_store/key_value_store";
import LastSessionCalculationExpressionStore from "../../../../app/infrastructure/anticorruption_layer/last_session_calculation_expression_store";

describe('Test Class "LastSessionCalculationExpressionStore" Behavior', () => {
  beforeEach(() => {
    KeyValueStore.setItem(LAST_SESSION_CALCULATION_KEY, "");
  });

  it('Test If Method "getExpression" Returns Stored Calculation Expression From Last Session', () => {
    KeyValueStore.setItem(
      LAST_SESSION_CALCULATION_KEY,
      SIMPLE_CALCULATOR_CALCULATION_EXPRESSION,
    );

    const storedCalculationExpressionFromLastSession =
      LastSessionCalculationExpressionStore.getExpression();

    expect(storedCalculationExpressionFromLastSession).toEqual(
      SIMPLE_CALCULATOR_CALCULATION_EXPRESSION,
    );
  });

  it('Test If Method "getExpression" Returns Empty String If No Calculation Has Been Stored From Last Session', () => {
    const storedCalculationExpressionFromLastSession =
      LastSessionCalculationExpressionStore.getExpression();

    expect(storedCalculationExpressionFromLastSession).toEqual("");
  });

  it('Test If Method "setExpression" Updates Key Value On KeyValueStored To Next The Session', () => {
    LastSessionCalculationExpressionStore.setExpression(
      SIMPLE_CALCULATOR_CALCULATION_EXPRESSION,
    );

    const storedCalculationExpressionToNextSession = KeyValueStore.getItem(
      LAST_SESSION_CALCULATION_KEY,
    );

    expect(storedCalculationExpressionToNextSession).toEqual(
      SIMPLE_CALCULATOR_CALCULATION_EXPRESSION,
    );
  });
});
