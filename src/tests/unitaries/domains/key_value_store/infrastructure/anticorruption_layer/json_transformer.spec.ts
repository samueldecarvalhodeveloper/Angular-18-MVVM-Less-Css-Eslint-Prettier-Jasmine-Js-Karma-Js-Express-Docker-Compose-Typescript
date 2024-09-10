import { REAL_OBJECT_DATA } from "../../../../../../app/constants/domains/key_value_store_constants";
import JsonTransformer from "../../../../../../app/domains/key_value_store/infrastructure/anticorruption_layer/json_transformer";
import {
  RealObjectEntity,
  STRING_FROM_JSON_OBJECT,
} from "../../../../../concerns/mocks/domains/key_value_store_mocks";

describe('Test Class "JsonTransformer" Behavior', () => {
  it('Test If Method "getRealObjectFromJsonString" Returns A Real Object Instance From String Json Representation Correctly', () => {
    const realObject: RealObjectEntity = new RealObjectEntity(REAL_OBJECT_DATA);
    const realObjectFromJsonString: RealObjectEntity =
      JsonTransformer.getRealObjectFromJsonString<RealObjectEntity>(
        STRING_FROM_JSON_OBJECT,
      );

    expect(realObjectFromJsonString.data).toEqual(realObject.data);
  });

  it('Test If Method "getJsonStringFromRealObject" Returns A Json String Representation Of Real Object Correctly', () => {
    const realObject: RealObjectEntity = new RealObjectEntity(REAL_OBJECT_DATA);
    const jsonStringRepresentationOfRealObject: string =
      JsonTransformer.getJsonStringFromRealObject(realObject);

    expect(jsonStringRepresentationOfRealObject).toEqual(
      STRING_FROM_JSON_OBJECT,
    );
  });
});
