import { TypeCif, CodeProvinceCif } from '../models/cif/cif.model';

export class Utils {
  /*
  * Regular expression NIF, NIE, CIF
  */
  private static NIF_REGEX = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
  private static NIF_REGEX_WITHOUT_CODE_CONTROL = /^[0-9]{8}$/i;
  private static NIE_REGEX = /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
  private static NIE_REGEX_WITHOUT_CODE_CONTROL = /^[XYZ][0-9]{7}$/i;
  private static CIF_REGEX = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/;
  private static CIF_REGEX_WITHOUT_CODE_CONTROL = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})$/;

  private static arrayCif: Array<TypeCif> = new Array<TypeCif>();
  private static arrayCodeProvinceCif: Array<CodeProvinceCif> = new Array<CodeProvinceCif>();



  constructor() {
  }

  /**
   * getArrayCif():Array<TypeCif>
   */
  public static getArrayCif(): Array<TypeCif> {
    if (Utils.arrayCif.length === 0) {
      Utils.arrayCif.push(new TypeCif('A', 'A: Sociedad Anónima'));
      Utils.arrayCif.push(new TypeCif('B', 'B: Sociedad de responsabilidad limitada'));
      Utils.arrayCif.push(new TypeCif('C', 'C: Sociedad colectiva'));
      Utils.arrayCif.push(new TypeCif('D', 'D: Sociedad comanditaria'));
      Utils.arrayCif.push(new TypeCif('E', 'E: Comunidad de bienes y herencias yacentes'));
      Utils.arrayCif.push(new TypeCif('G', 'G: Asociaciones'));
      Utils.arrayCif.push(new TypeCif('H', 'H: Comunidad de propietarios en régimen de propiedad horizontal'));
      Utils.arrayCif.push(new TypeCif('J', 'J: Sociedades Civiles, con o sin personalidad jurídica'));
      Utils.arrayCif.push(new TypeCif('K', 'K: Formato antiguo, en desuso'));
      Utils.arrayCif.push(new TypeCif('L', 'L: Formato antiguo, en desuso'));
      Utils.arrayCif.push(new TypeCif('N', 'N: Entidades extranjeras'));
      Utils.arrayCif.push(new TypeCif('M', 'M: Formato antiguo, en desuso'));
      Utils.arrayCif.push(new TypeCif('P', 'P: Corporación local'));
      Utils.arrayCif.push(new TypeCif('Q', 'Q: Organismo públicos'));
      Utils.arrayCif.push(new TypeCif('R', 'R: Congregaciones e Instituciones Religiosas'));
      Utils.arrayCif.push(new TypeCif('S', 'S: Organos de la Administración del Estado y Comunidades Autónomas'));
      Utils.arrayCif.push(new TypeCif('U', 'U: Uniones temporales de Empresas'));
      Utils.arrayCif.push(new TypeCif('V', 'V: Otros tipos no definidos en el resto de claves'));
      Utils.arrayCif.push(new TypeCif('W', 'W: Establecimientos permanentes de entidades no residentes en España'));
    }
    return Utils.arrayCif;
  }


  /**
   * getArrayCodeProvinceCif():Array<CodeProvinceCif>
   */
  public static getArrayCodeProvinceCif(): Array<CodeProvinceCif> {
    if (Utils.arrayCodeProvinceCif.length === 0) {
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('01', 'Alava'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('02', 'Albacete'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('03', 'Alicante'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('53', 'Alicante'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('54', 'Alicante'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('04', 'Almería'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('05', 'Ývila'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('06', 'Badajoz'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('07', 'Islas Baleares'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('57', 'Islas Baleares'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('08', 'Barcelona'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('58', 'Barcelona'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('59', 'Barcelona'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('60', 'Barcelona'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('61', 'Barcelona'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('62', 'Barcelona'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('63', 'Barcelona'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('64', 'Barcelona'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('09', 'Burgos'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('10', 'Cáceres'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('11', 'Cádiz'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('72', 'Cádiz'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('12', 'Castellón'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('13', 'Ciudad Real'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('14', 'Córdoba'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('56', 'Córdoba'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('15', 'A Coruña'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('70', 'A Coruña'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('16', 'Cuenca'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('17', 'Girona'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('55', 'Girona'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('18', 'Granada'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('19', 'Guadalajara'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('20', 'Guipúzcoa'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('71', 'Guipúzcoa'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('21', 'Huelva'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('22', 'Huesca'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('23', 'Jaén'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('24', 'León'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('25', 'Lleida'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('26', 'La Rioja'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('27', 'Lugo'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('28', 'Madrid'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('78', 'Madrid'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('79', 'Madrid'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('80', 'Madrid'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('81', 'Madrid'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('82', 'Madrid'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('83', 'Madrid'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('84', 'Madrid'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('29', 'Málaga'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('92', 'Málaga'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('93', 'Málaga'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('30', 'Murcia'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('73', 'Murcia'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('31', 'Naletra'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('32', 'Ourense'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('33', 'Oviedo'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('74', 'Oviedo'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('34', 'Palencia'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('35', 'Las Palmas'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('76', 'Las Palmas'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('36', 'Pontevedra'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('94', 'Pontevedra'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('37', 'Salamanca'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('38', 'Santa Cruz de Tenerife'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('75', 'Santa Cruz de Tenerife'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('39', 'Cantabria'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('40', 'Segovia'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('41', 'Sevilla'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('91', 'Sevilla'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('42', 'Soria'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('43', 'Tarragona'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('77', 'Tarragona'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('44', 'Teruel'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('45', 'Toledo'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('46', 'Valencia'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('96', 'Valencia'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('97', 'Valencia'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('98', 'Valencia'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('47', 'Valladolid'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('48', 'Vizcaya'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('95', 'Vizcaya'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('49', 'Zamora'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('50', 'Zaragoza'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('99', 'Zaragoza'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('51', 'Ceuta'));
      Utils.arrayCodeProvinceCif.push(new CodeProvinceCif('52', 'Melilla'));
    }
    return Utils.arrayCodeProvinceCif;
  }




  /**
   * generateNIF:string
   */
  public static generateNIF(): string {
    const nifWithoutLetter: string = Utils.randomInteger(1);
    const nif = Utils.generarLetraControl(nifWithoutLetter);
    if (nif != null && nif !== undefined) {
      return nif;
    } else {
      return null;
    }
  }

  /**
   * generateNIE:string
   */
  public static generateNIE(): string {
    const nieWithoutLetter: string = Utils.randomInteger(3);
    const nie = Utils.generarLetraControl(nieWithoutLetter);
    if (nie != null && nie !== undefined) {
      return nie;
    } else {
      return null;
    }
  }

  /**
   * generateCIF:string
   */
  public static generateCIF(): string {
    const cifWithoutLetter: string = Utils.randomInteger(4);
    const cif = Utils.generarLetraControl(cifWithoutLetter);
    if (cif != null && cif !== undefined) {
      return cif;
    } else {
      return null;
    }
  }

  private static randomInteger(type: number): string {
    switch (type) {
      case (1):
        return String(Math.floor(Math.random() * (99999999 - 10000000)) + 10000000);
      case (2):
        return String(Math.floor(Math.random() * (9999999 - 1000000)) + 1000000);
      case (3):
        const i: number = Math.floor(Math.random() * (3 - 0)) + 0;
        const e: number = Math.floor(Math.random() * (9999999 - 1000000)) + 1000000;
        switch (i) {
          case (0):
            return 'X' + String(e);
          case (1):
            return 'Y' + String(e);
          case (2):
            return 'Z' + String(e);
        }
        break;
      case (4):
        const letter: string = Utils.getArrayCif()[Math.floor(Math.random() * (Utils.getArrayCif().length - 0)) + 0].letter;
        const code: string = Utils.getArrayCodeProvinceCif()[Math.floor(Math.random() *
          (Utils.getArrayCodeProvinceCif().length - 1 - 0)) + 0].code;
        const numberCif: string = String(Math.floor(Math.random() * (99999 - 10000)) + 10000);
        return letter + code + numberCif;
    }
    return null;
  }


  /*
  * Validate NIF, NIE, CIF
  */
  public static validate(value: string): boolean {
    const validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
    const valueUpper: string = value.toString().toUpperCase();


    if (Utils.CIF_REGEX.test(valueUpper)) {
      return Utils.validateCIF(value);

    } else if (!Utils.NIF_REGEX.test(valueUpper) && !Utils.NIE_REGEX.test(valueUpper)) {
      return false;
    }

    const nie: string = valueUpper
      .replace(/^[X]/, '0')
      .replace(/^[Y]/, '1')
      .replace(/^[Z]/, '2');

    const letter: string = valueUpper.substr(-1);
    const charIndex: number = parseInt(nie.substr(0, 8), 10) % 23;

    if (validChars.charAt(charIndex) === letter) {
      return true;
    }

    return false;
  }


  /**
   * generarLetraControl
   * return NIF, NIE, CIF with code control
   */
  private static generarLetraControl(value: string): string {
    const validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
    const valueUpper: string = value.toString().toUpperCase();

    if (!Utils.CIF_REGEX_WITHOUT_CODE_CONTROL.test(valueUpper)
      && !Utils.NIF_REGEX_WITHOUT_CODE_CONTROL.test(valueUpper)
      && !Utils.NIE_REGEX_WITHOUT_CODE_CONTROL.test(valueUpper)) {
      return null;
    }

    if (Utils.NIF_REGEX_WITHOUT_CODE_CONTROL.test(valueUpper) || Utils.NIE_REGEX_WITHOUT_CODE_CONTROL.test(valueUpper)) {
      // replace the first letter with the number in the NIE
      const nie: string = valueUpper
        .replace(/^[X]/, '0')
        .replace(/^[Y]/, '1')
        .replace(/^[Z]/, '2');

      const charIndex: number = parseInt(nie.substr(0, 8), 10) % 23;

      const letter: string = validChars.charAt(charIndex);
      if (letter != null && letter !== undefined) {
        return value + letter;
      } else {
        return null;
      }
    } else if (Utils.CIF_REGEX_WITHOUT_CODE_CONTROL.test(valueUpper)) {
      const match = valueUpper.match(Utils.CIF_REGEX_WITHOUT_CODE_CONTROL);
      let letter: string = match[1];
      const numero: string = match[2];
      let evenSum = 0;
      let oddSum = 0;
      let numerico: number;
      for (let i = 0; i < numero.length; i++) {
        numerico = parseInt(numero[i], 10);
        // Odd positions (Even index equals to odd position. i=0 equals first position)
        if (i % 2 === 0) {
          // Odd positions are multiplied first.
          numerico *= 2;
          // If the multiplication is bigger than 10 we need to adjust
          oddSum += numerico < 10 ? numerico : numerico - 9;
          // Even positions
          // Just sum them
        } else {
          evenSum += numerico;
        }
      }
      const controlDigit = (10 - Number((evenSum + oddSum).toString().substr(-1)));
      const controlLetter = 'JABCDEFGHI'.substr(controlDigit, 1);
      
      if (valueUpper == null || valueUpper === undefined || controlLetter == null || controlLetter === undefined) {
        return null;
      } else {
        // Control must be a digit
        if (letter.match(/[ABEH]/)) {
          valueUpper + (controlDigit);
          // Control must be a letter
        } else if (letter.match(/[KPQS]/)) {
          return valueUpper + controlLetter;
        } else {
          return valueUpper + controlLetter;
        }
      }

    }
  }

  /**
   * Validate CIF
   */
  public static validateCIF(cif: string): boolean {
    const match = cif.match(Utils.CIF_REGEX);
    const letter: string = match[1];
    const numero: string = match[2];
    const control: string = match[3];

    let evenSum = 0;
    let oddSum = 0;
    let numerico: number;

    for (let i = 0; i < numero.length; i++) {
      numerico = parseInt(numero[i], 10);

      // Odd positions (Even index equals to odd position. i=0 equals first position)
      if (i % 2 === 0) {
        // Odd positions are multiplied first.
        numerico *= 2;
        // If the multiplication is bigger than 10 we need to adjust
        oddSum += numerico < 10 ? numerico : numerico - 9;
        // Even positions
        // Just sum them
      } else {
        evenSum += numerico;
      }
    }

    const controlDigit = (10 - Number((evenSum + oddSum).toString().substr(-1)));
    const controlDigitS: string = String(controlDigit);
    const controlLetter = 'JABCDEFGHI'.substr(controlDigit, 1);

    // Control must be a digit
    if (letter.match(/[ABEH]/)) {
      valid = control === controlDigitS;
      // Control must be a letter
    } else if (letter.match(/[KPQS]/)) {
      valid = control === controlLetter;
      // Can be either
    } else {
      valid = control === controlDigitS || control === controlLetter;
    }
    return valid;
  }
  
}
