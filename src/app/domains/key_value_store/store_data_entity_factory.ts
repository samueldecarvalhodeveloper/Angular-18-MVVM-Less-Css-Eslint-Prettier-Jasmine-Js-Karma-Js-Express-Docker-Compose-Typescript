import { StoreValue } from "./infrastructure/environment/typescript/types";
import StoreDataEntity from "./infrastructure/entities/store_data_entity";

class StoreDataEntityFactory {
  private constructor() {}

  public static getInstance(data: StoreValue): StoreDataEntity {
    return new StoreDataEntity(data);
  }
}

export default StoreDataEntityFactory;
