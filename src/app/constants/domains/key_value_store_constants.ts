export const STORED_NUMBER: number = 10;

export const NOT_EXISTING_ITEM_ERROR_NAME: string = "Not Existing Item Error";

export const NOT_EXISTING_ITEM_ERROR_CAUSE: string =
  "Chosen Item Does Not Exist In Key Value Store";

export function NOT_EXISTING_ITEM_ERROR_MESSAGE(itemKey: string): string {
  return `Item With Key: "${itemKey}"; Does Not Exist!`;
}

export const REAL_OBJECT_DATA: string = "Hello, World!";
