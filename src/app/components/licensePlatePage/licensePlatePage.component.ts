import { Component, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';

import { VehicleUtils } from '../../utils/vehicleUtils.utils';
import { FormLicensePlate } from '../../forms/licensePlate/formLicensePlate.form';

import { LoggerService } from '../../logger/loggerService.service';

@Component({
    selector: 'app-license-plate-page',
    templateUrl: './licensePlatePage.component.html',
    styleUrls: ['./licensePlatePage.component.css']
})
export class LicensePlatePageComponent implements OnInit, OnChanges {
    @ViewChild('messageDiv', { static: true })
    messageDiv: ElementRef;

    limit = 5;
    arrayFormLicensePlate?: Array<FormLicensePlate> = new Array<FormLicensePlate>();


    constructor() {
    }

    ngOnInit(): void {
        this.generateForm();
    }


    ngOnChanges(): void {
    }

    /*
     * Generate form
     */
    generateForm(): void {
        LoggerService.log('Init generateForm()');
        this.arrayFormLicensePlate = new Array<FormLicensePlate>();
        // Generator license plate
        for (let i = 1; i <= this.limit; i++) {
            this.arrayFormLicensePlate.push(new FormLicensePlate(VehicleUtils.generateLicensePlateCar(),
                VehicleUtils.generateLicensePlateScooter()));
        }
    }


    /*
     * Method that copies to clipboard.
     */
    copyInputMessage(valueS: string): void {
        navigator.clipboard.writeText(valueS);
        this.getMessageCopy(valueS);
    }

    refresh(): void {
        this.generateForm();
    }

    /**
     * display copied content
     */
    getMessageCopy(valueS: string): void {
        this.messageDiv.nativeElement.textContent = 'Valor copiado --> ' + valueS;
        this.messageDiv.nativeElement.classList.remove('hide');
        this.messageDiv.nativeElement.classList.add('show');
        this.messageDiv.nativeElement.classList.add('alert');
        this.messageDiv.nativeElement.classList.add('alert-success');
        // In 3 seconds the div will be hidden
        setTimeout(() => {
            this.messageDiv.nativeElement.textContent = '';
            this.messageDiv.nativeElement.classList = [];
            this.messageDiv.nativeElement.classList.add('hide');
        }, 3000);
    }

}
