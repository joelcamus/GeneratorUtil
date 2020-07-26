import { Component, OnInit, OnChanges } from '@angular/core';

import { Utils } from '../../utils/utils.util';
import { FormNifNieCif } from '../../forms/nifNieCif/formNifNieCif.form';

import { LoggerService } from '../../logger/loggerService.service';

@Component({
  selector: 'app-nifNieCif-page',
  templateUrl: './nifNieCifPage.component.html',
  styleUrls: ['./nifNieCifPage.component.css']
})
export class NifNieCifPageComponent implements OnInit, OnChanges {
  limit = 9;

  arrayformNifNieCif?: Array<FormNifNieCif> = new Array<FormNifNieCif>();


  constructor() {
  }

  ngOnInit(): void {
    // Generator NIF, NIE, CIF
    for (let i = 1; i <= this.limit; i++) {
      this.arrayformNifNieCif.push(new FormNifNieCif(Utils.generateNIF(), Utils.generateNIE(), Utils.generateCIF()));
    }
  }

  ngOnChanges(): void {
  }

  /*
   * Method that copies to clipboard.
   */
  copyInputMessage(valueS: string): void {
    navigator.clipboard.writeText(valueS);
    LoggerService.log('Copy NIF/NIE/CIF --> ' + valueS);
  }

}
