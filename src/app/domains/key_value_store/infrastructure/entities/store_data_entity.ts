import { StoreValue } from "../environment/typescript/types";

class StoreDataEntity {
  public readonly data: StoreValue;

  constructor(data: StoreValue) {
    this.data = data;
  }
}

export default StoreDataEntity;
