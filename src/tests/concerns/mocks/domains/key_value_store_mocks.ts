export const STRING_FROM_JSON_OBJECT: string = '{"data":"Hello, World!"}';

export class RealObjectEntity {
  public readonly data: string;

  public constructor(data: string) {
    this.data = data;
  }
}
