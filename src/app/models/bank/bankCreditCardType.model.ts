export class BankCreditCardType {
    public type: string = null;
    public creditCardPrefix: Array<string> = null;
    public imageCreditCard: string = null;

    constructor(type: string, creditCardPrefix: Array<string>, imageCreditCard: string) {
        this.type = type;
        this.creditCardPrefix = creditCardPrefix;
        this.imageCreditCard = imageCreditCard;
    }

    /**
     * getRandomPrefix
     */
    public getRandomPrefix(): string {
        return this.creditCardPrefix[Math.floor(Math.random() * (this.creditCardPrefix.length - 1 - 0)) + 0];

    }
}
