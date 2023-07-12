import { v4 } from "uuid";

export class ID {
  readonly value: string = null;
  private constructor(value: string) {
    this.value = value;
  }

  static create() {
    return new ID(v4());
  }

  static from(id: string) {
    return new ID(id);
  }
}
