import { Component, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

import { LoggerService } from '../../logger/loggerService.service';
import { Utils } from '../../utils/utils.util';

@Component({
  selector: 'app-validate-nif-nif-cif',
  templateUrl: './validate-nif-nif-cif.component.html',
  styleUrls: ['./validate-nif-nif-cif.component.scss']
})
export class ValidateNifNifCifComponent implements OnInit, OnChanges {
  @ViewChild('inputNif', { static: true })
  inputNif: ElementRef;
  @ViewChild('inputNie', { static: true })
  inputNie: ElementRef;
  @ViewChild('inputCif', { static: true })
  inputCif: ElementRef;
  nif = new FormControl('');
  nie = new FormControl('');
  cif = new FormControl('');


  constructor() { }

  ngOnInit(): void {
  }


  ngOnChanges(): void {
  }


  validateNif(valueS: string): void {
    LoggerService.log('validateNif --> ' + valueS);
    this.inputNif.nativeElement.classList.remove('redBorder');
    this.inputNif.nativeElement.classList.remove('greenBorder');
    if (Utils.validate(valueS)) {
      this.inputNif.nativeElement.classList.add('greenBorder');
    } else {
      this.inputNif.nativeElement.classList.add('redBorder');
    }

  }

  validate(): void {
    LoggerService.log('validate documentNif --> ' + this.nif.value + ', validate documentNie --> ' + this.nie.value + ', validate documentCif --> ' + this.cif.value);
    this.validateForm(this.inputNif, this.nif);
    this.validateForm(this.inputNie, this.nie);
    this.validateForm(this.inputCif, this.cif);
  }

  validateForm(documentInput: ElementRef, document: FormControl): void {
    documentInput.nativeElement.classList.remove('redBorder');
    documentInput.nativeElement.classList.remove('greenBorder');
    if (!Utils.isBlank(document.value)) {
      documentInput.nativeElement.classList.add(Utils.validate(document.value) ? 'greenBorder' : 'redBorder');

    }
  }

}


