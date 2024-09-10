import {
  LAST_CALCULATION_VALUE,
  LAST_SESSION_CALCULATION_KEY,
} from "../../app/constants/domains/calculator_constants";
import KeyValueStore from "../../app/domains/key_value_store/key_value_store";

describe('Test Component "KeyValueStore" Behavior', () => {
  it("Test If Component Handles Data Input And Output Scenario", () => {
    KeyValueStore.setItem(LAST_SESSION_CALCULATION_KEY, LAST_CALCULATION_VALUE);

    const storedValue: string = KeyValueStore.getItem(
      LAST_SESSION_CALCULATION_KEY,
    ) as string;

    expect(storedValue).toEqual(LAST_CALCULATION_VALUE);
  });
});
