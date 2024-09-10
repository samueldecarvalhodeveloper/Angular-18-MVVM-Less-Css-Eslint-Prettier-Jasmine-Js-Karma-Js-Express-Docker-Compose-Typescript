import { LAST_SESSION_CALCULATION_KEY } from "../../../../../../app/constants/domains/calculator_constants";
import {
  NOT_EXISTING_ITEM_ERROR_CAUSE,
  NOT_EXISTING_ITEM_ERROR_MESSAGE,
  NOT_EXISTING_ITEM_ERROR_NAME,
} from "../../../../../../app/constants/domains/key_value_store_constants";
import NotExistingItemError from "../../../../../../app/domains/key_value_store/infrastructure/errors/not_existing_item_error";

describe('Test Class "NotExistingItemError" Behavior', () => {
  it("Test If Error Describes How Should A Not Existing Item Error Be Used By The System Correctly", () => {
    const error: Error = new NotExistingItemError(LAST_SESSION_CALCULATION_KEY);

    expect(error.name).toEqual(NOT_EXISTING_ITEM_ERROR_NAME);
    expect(error.message).toEqual(
      NOT_EXISTING_ITEM_ERROR_MESSAGE(LAST_SESSION_CALCULATION_KEY),
    );
    expect(error.cause).toEqual(NOT_EXISTING_ITEM_ERROR_CAUSE);
    expect(error.stack).toBeFalsy();
  });
});
