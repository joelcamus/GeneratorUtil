import { BankCode } from '../models/bank/bankCode.model';
import { BankCreditCardType } from '../models/bank/bankCreditCardType.model';

export class BankUtils {

  private static arrayBankCode: Array<BankCode> = new Array<BankCode>();
  private static arrayBankCreditCardType: Array<BankCreditCardType> = new Array<BankCreditCardType>();

  /**
   * generate IBAN
   *
   */
  public static generateIBAN(): string {
    // get random bank code
    const codeBank: string = BankUtils.getArrayBankCode()[Math.floor(Math.random() *
      (BankUtils.getArrayBankCode().length - 1 - 0)) + 0].code;
    // generate the financial entity codes at random (4 digits)
    const office: string = String(Math.floor(Math.random() * (9999 - 1000)) + 1000);
    // generate the account number at random (10 digits)
    const accountNumber: string = String(Math.floor(Math.random() * (9999999999 - 1000000000)) + 1000000000);
    // generate check digit
    const cdCCC: string = BankUtils.generateCD2CCC(codeBank, office, accountNumber);
    // Concat ccc
    const ccc: string = codeBank + office + cdCCC + accountNumber;
    // generate IBAN
    const iban: string = BankUtils.generateCD2IBAN(ccc, 'ES');
    // return IBAN
    return iban + ccc;
  }

  /**
   * Generate Check digital by codeBank, office, accountNumber
   *
   * @param codeBank
   * @param office
   * @param accountNumber
   */
  public static generateCD2CCC(codeBank: string, office: string, accountNumber: string): string {
    const value = new Array(6, 3, 7, 9, 10, 5, 8, 4, 2, 1);

    const codeBankInv: string = BankUtils.inv(codeBank);
    const officeInv: string = BankUtils.inv(office);
    const accountNumberInv: string = BankUtils.inv(accountNumber);

    const ofient: string = officeInv + codeBankInv;
    let sum = 0;
    for (let a = 0; a < 8; a++) {
      sum += Number(ofient.substr(a, 1)) * value[a];
    }

    let sumCCC = 0;
    for (let a = 0; a < 10; a++) {
      sumCCC += Number(accountNumberInv.substr(a, 1)) * value[a];
    }

    let dc: number = 11 - (sum % 11);
    let dcCcc: number = 11 - (sumCCC % 11);

    if (dc === 10) {
      dc = 1;
    }
    if (dc === 11) {
      dc = 0;
    }
    if (dcCcc === 10) {
      dcCcc = 1;
    }
    if (dcCcc === 11) {
      dcCcc = 0;
    }

    return String(dc) + String(dcCcc);
  }

  public static inv(item: string): string {
    let ret = '';

    for (let a = 0; a <= item.length; a++) {
      ret = ret + item.substr(item.length - a, 1);
    }

    return ret;
  }



  /**
   * Generate check digital of IBAN
   *
   * @param ccc
   * @param codeCountry
   */
  public static generateCD2IBAN(ccc: string, codeCountry: string): string {
    if (codeCountry.length !== 2) {
      return '';
    } else {
      let aux: string;
      let cNext: number;
      let tmp: number;
      ccc = ccc + String(codeCountry.charCodeAt(0) - 55) + String(codeCountry.charCodeAt(1) - 55) + '00';
      tmp = parseInt(ccc.substring(0, 9), 10) % 97;
      if (tmp < 10) {
        aux = '0';
      }
      else {
        aux = '';
      }
      aux = aux + String(tmp);
      ccc = ccc.substring(9);
      while (ccc !== '') {
        if (parseInt(aux, 10) < 10) {
          cNext = 8;
        } else {
          cNext = 7;
        }
        if (ccc.length < cNext) {
          aux = aux + ccc;
          ccc = '';
        }
        else {
          aux = aux + ccc.substring(0, cNext);
          ccc = ccc.substring(cNext);
        }
        tmp = parseInt(aux, 10) % 97;
        if (tmp < 10) {
          aux = '0';
        } else {
          aux = '';
        }
        aux = aux + String(tmp);
      }
      tmp = 98 - parseInt(aux, 10);
      if (tmp < 10) {
        return codeCountry + '0' + String(tmp) + ccc;
      } else {
        return codeCountry + String(tmp) + ccc;
      }
    }
  }

  /**
   * getArrayBankCode():Array<BankCode> Map BankCode
   */
  public static getArrayBankCode(): Array<BankCode> {
    if (BankUtils.arrayBankCode.length === 0) {
      BankUtils.arrayBankCode.push(new BankCode('2080', 'Abanca Corporación Bancaria'));
      BankUtils.arrayBankCode.push(new BankCode('0061', 'Banca March'));
      BankUtils.arrayBankCode.push(new BankCode('0188', 'Banco Alcalá'));
      BankUtils.arrayBankCode.push(new BankCode('0182', 'Banco Bilbao Vizcaya Argentaria'));
      BankUtils.arrayBankCode.push(new BankCode('0130', 'Banco Caixa Geral'));
      BankUtils.arrayBankCode.push(new BankCode('0234', 'Banco Caminos'));
      BankUtils.arrayBankCode.push(new BankCode('2105', 'Banco Castilla-La Mancha'));
      BankUtils.arrayBankCode.push(new BankCode('0240', 'Banco de Crédito Social Cooperativo'));
      BankUtils.arrayBankCode.push(new BankCode('0081', 'Banco de Sabadell'));
      BankUtils.arrayBankCode.push(new BankCode('0487', 'Banco Mare Nostrum'));
      BankUtils.arrayBankCode.push(new BankCode('0186', 'Banco Mediolanum'));
      BankUtils.arrayBankCode.push(new BankCode('0238', 'Banco Pastor'));
      BankUtils.arrayBankCode.push(new BankCode('0075', 'Banco Popular Español'));
      BankUtils.arrayBankCode.push(new BankCode('0049', 'Banco Santander'));
      BankUtils.arrayBankCode.push(new BankCode('3873', 'Banco Santander Totta'));
      BankUtils.arrayBankCode.push(new BankCode('2038', 'Bankia'));
      BankUtils.arrayBankCode.push(new BankCode('0128', 'Bankinter'));
      BankUtils.arrayBankCode.push(new BankCode('0138', 'Bankoa'));
      BankUtils.arrayBankCode.push(new BankCode('0152', 'Barclays Bank PLC'));
      BankUtils.arrayBankCode.push(new BankCode('3842', 'BNP Paribas Paris'));
      BankUtils.arrayBankCode.push(new BankCode('3025', 'Caixa de Credit del Enginyers'));
      BankUtils.arrayBankCode.push(new BankCode('2100', 'Caixabank'));
      BankUtils.arrayBankCode.push(new BankCode('2045', 'Caja de Ahorros y Monte de Piedad de Ontinyent'));
      BankUtils.arrayBankCode.push(new BankCode('3035', 'Caja Laboral Popular CC'));
      BankUtils.arrayBankCode.push(new BankCode('3081', 'Caja Rural Castilla-La Mancha3058 Cajamar Caja Rural'));
      BankUtils.arrayBankCode.push(new BankCode('2000', 'Cecabank'));
      BankUtils.arrayBankCode.push(new BankCode('1474', 'Citibank Europe PLC'));
      BankUtils.arrayBankCode.push(new BankCode('3821', 'Commerzbank AG'));
      BankUtils.arrayBankCode.push(new BankCode('3877', 'Danske Bank A/S'));
      BankUtils.arrayBankCode.push(new BankCode('0019', 'Deutsche Bank SAE'));
      BankUtils.arrayBankCode.push(new BankCode('0239', 'EVO Banco'));
      BankUtils.arrayBankCode.push(new BankCode('2085', 'Ibercaja Banco'));
      BankUtils.arrayBankCode.push(new BankCode('1465', 'ING Bank NV'));
      BankUtils.arrayBankCode.push(new BankCode('2095', 'Kutxabank'));
      BankUtils.arrayBankCode.push(new BankCode('2048', 'Liberbank'));
      BankUtils.arrayBankCode.push(new BankCode('0131', 'Novo Banco'));
      BankUtils.arrayBankCode.push(new BankCode('0073', 'Open Bank'));
      BankUtils.arrayBankCode.push(new BankCode('0108', 'Société Générale'));
      BankUtils.arrayBankCode.push(new BankCode('2103', 'Unicaja Banco'));
    }
    return BankUtils.arrayBankCode;
  }

  /**
   * Map BankCreditCardType
   *
   */
  public static getArrayBankCreditCardType(): Array<BankCreditCardType> {
    if (BankUtils.arrayBankCreditCardType.length === 0) {
      BankUtils.arrayBankCreditCardType.push(new BankCreditCardType('Visa', new Array<string>('4'), 'visa'));
      BankUtils.arrayBankCreditCardType.push(new BankCreditCardType('MasterCard', new Array<string>('51', '52', '53', '54', '55', '222100', '272099'), 'masterCard'));
      BankUtils.arrayBankCreditCardType.push(new BankCreditCardType('Visa Electron', new Array<string>('4026', '417500', '4508', '4844', '4913', '4917'), 'visaElectron'));
      BankUtils.arrayBankCreditCardType.push(new BankCreditCardType('American Express', new Array<string>('34', '37'), 'americanExpress'));
    }
    return BankUtils.arrayBankCreditCardType;
  }

  public static getRandomBankCreditCardType(): string {
    return BankUtils.getArrayBankCreditCardType()
    [Math.floor(Math.random() * (BankUtils.getArrayBankCreditCardType().length - 0)) + 0].getRandomPrefix();
  }

  public static getMaxMinRandom(value: string, isMax: boolean): number {
    let maxAux = '';
    for (let i: number = value.length + 1; i < 16; i++) {
      maxAux += '9';
    }
    if (isMax) {
      return Number(maxAux);
    } else {
      return (Number(maxAux) + 1) / 10;
    }

  }



  /**
   * Generate Credit card number
   */
  public static generateCreditCardNumber(): string {
    // get prefix of credit card
    const creditCardPrefix: string = BankUtils.getRandomBankCreditCardType();
    // Generate random credit card number
    const max: number = BankUtils.getMaxMinRandom(creditCardPrefix, true);
    const min: number = BankUtils.getMaxMinRandom(creditCardPrefix, false);
    const creditCardNumberAux: string = creditCardPrefix
      + String(Math.floor(Math.random() * (max - min)) + min);
    let sum = 0;
    for (let i = 0; i < creditCardNumberAux.length; i++) {
      sum += parseInt(creditCardNumberAux.substring(i, i + 1), 10);
    }

    const arrayCode = new Array(0, 1, 2, 3, 4, -4, -3, -2, -1, 0);
    for (let i = creditCardNumberAux.length - 1; i >= 0; i -= 2) {
      const codeIndex = parseInt(creditCardNumberAux.substring(i, i + 1), 10);
      const codeValue = arrayCode[codeIndex];
      sum += codeValue;
    }

    let checkDigit = sum % 10;
    checkDigit = 10 - checkDigit;

    if (checkDigit === 10) {
      checkDigit = 0;
    }

    // return credit card
    return creditCardNumberAux + checkDigit;
  }


  /**
   * Format the value with spaces each box characters
   *
   * @param value
   */
  public static formaterSpace4digits(value: string): string {
    return value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
  }

  /**
   * Return key's image of  Credit Card
   *
   */
  public static getImageCreditCard(creditCardNumber: string): string {
    let image: string = null;
    BankUtils.getArrayBankCreditCardType().forEach((bankCreditCardType: BankCreditCardType) => {
      const imageAux: string = bankCreditCardType.imageCreditCard;
      bankCreditCardType.creditCardPrefix.forEach((creditCardPrefix: string) => {
        if (creditCardNumber.startsWith(creditCardPrefix)) {
          image = imageAux;
        }
      });
    });

    return image;
  }
}
