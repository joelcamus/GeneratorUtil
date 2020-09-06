export class VehicleUtils {


  // Valid letters for license plate
  private static arrayLicensePlate: string[] = [
    'B', 'C',
    'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'M', 'N', 'P', 'R', 'S', 'T', 'V',
    'W', 'X', 'Y', 'Z'];


  /**
   * generate licence plate car
   *
   */
  public static generateLicensePlateCar(): string {

    let licensePlateCar = String(Math.floor(Math.random() * (9999 - 1000)) + 1000);
    for (let i = 0; i < 3; i++) {
      licensePlateCar += VehicleUtils.arrayLicensePlate[Math.floor(Math.random() * (VehicleUtils.arrayLicensePlate.length - 1 - 0)) + 0];
    }
    return licensePlateCar;

  }

  public static generateLicensePlateScooter(): string {
    return 'C' + VehicleUtils.generateLicensePlateCar();
  }

}
