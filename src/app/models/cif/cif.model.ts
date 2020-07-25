export class TypeCif {
  public letter: string = null;
  public description: string = null;


  constructor(letter: string, description: string) {
    this.letter = letter;
    this.description = description;
  }
}

export class CodeProvinceCif {
  public code: string = null;
  public province: string = null;

  constructor(code: string, province: string) {
    this.code = code;
    this.province = province;
  }
}
