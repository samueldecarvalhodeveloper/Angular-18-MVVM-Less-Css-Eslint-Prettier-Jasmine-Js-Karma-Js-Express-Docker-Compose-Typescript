class JsonTransformer {
  private constructor() {}

  public static getRealObjectFromJsonString<T>(jsonString: string): T {
    return JSON.parse(jsonString);
  }

  public static getJsonStringFromRealObject(object: any): string {
    return JSON.stringify(object);
  }
}

export default JsonTransformer;
