import { Component, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';

import { Utils } from '../../utils/utils.util';
import { FormNifNieCif } from '../../forms/nifNieCif/formNifNieCif.form';

import { LoggerService } from '../../logger/loggerService.service';

@Component({
  selector: 'app-nifNieCif-page',
  templateUrl: './nifNieCifPage.component.html',
  styleUrls: ['./nifNieCifPage.component.css']
})
export class NifNieCifPageComponent implements OnInit, OnChanges {
  @ViewChild('copiadoDiv', { static: true })
  copiadoDiv: ElementRef;

  limit = 5;
  arrayformNifNieCif?: Array<FormNifNieCif> = new Array<FormNifNieCif>();


  constructor() {
  }

  ngOnInit(): void {
    this.generateForm();
  }


  ngOnChanges(): void {
  }

  /*
   *Generate form
   */
  generateForm(): void {
    this.arrayformNifNieCif = new Array<FormNifNieCif>();
    // Generator NIF, NIE, CIF
    for (let i = 1; i <= this.limit; i++) {
      this.arrayformNifNieCif.push(new FormNifNieCif(Utils.generateNIF(), Utils.generateNIE(), Utils.generateCIF()));
    }
  }


  /*
   * Method that copies to clipboard.
   */
  copyInputMessage(valueS: string): void {
    navigator.clipboard.writeText(valueS);
    this.getMessageCopy(valueS);
    LoggerService.log('Copy NIF/NIE/CIF --> ' + valueS);
  }

  refresh(): void {
    this.generateForm();
  }

  /**
   * display copied content
   */
  getMessageCopy(valueS: string): void {
    this.copiadoDiv.nativeElement.textContent = 'Valor copiado --> ' + valueS;
    this.copiadoDiv.nativeElement.classList.remove('hide');
    this.copiadoDiv.nativeElement.classList.add('show');
    // In 3 seconds the div will be hidden
    setTimeout(() => {
      this.copiadoDiv.nativeElement.textContent = '';
      this.copiadoDiv.nativeElement.classList.remove('show');
      this.copiadoDiv.nativeElement.classList.add('hide');
    }, 3000);
  }


}
