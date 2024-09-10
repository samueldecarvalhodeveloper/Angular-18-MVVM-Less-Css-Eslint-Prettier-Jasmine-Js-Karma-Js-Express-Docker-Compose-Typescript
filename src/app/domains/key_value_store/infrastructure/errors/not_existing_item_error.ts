import {
  NOT_EXISTING_ITEM_ERROR_CAUSE,
  NOT_EXISTING_ITEM_ERROR_MESSAGE,
  NOT_EXISTING_ITEM_ERROR_NAME,
} from "../../../../constants/domains/key_value_store_constants";

class NotExistingItemError implements Error {
  name: string = NOT_EXISTING_ITEM_ERROR_NAME;

  message: string;

  cause: unknown = NOT_EXISTING_ITEM_ERROR_CAUSE;

  constructor(itemKey: string) {
    this.message = NOT_EXISTING_ITEM_ERROR_MESSAGE(itemKey);
  }
}

export default NotExistingItemError;
