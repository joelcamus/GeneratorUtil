export class FormBank {
  public IBAN: string = null;
  public creditCardNumber: string = null;
  public imageCreditCard: string = null;

  constructor(IBAN: string, creditCardNumber: string, imageCreditCard?:string) {
    this.IBAN = IBAN;
    this.creditCardNumber = creditCardNumber;
    if(imageCreditCard!==null && imageCreditCard!== undefined){
      this.imageCreditCard=imageCreditCard;
    }
  }
}
