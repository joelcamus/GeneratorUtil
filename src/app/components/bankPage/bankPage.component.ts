import { Component, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';

import { BankUtils } from '../../utils/bankUtils.utils';
import { FormBank } from '../../forms/bank/formBank.form';

import { LoggerService } from '../../logger/loggerService.service';

@Component({
    selector: 'app-bank-page',
    templateUrl: './bankPage.component.html',
    styleUrls: ['./bankPage.component.css']
})
export class BankPageComponent implements OnInit, OnChanges {
    @ViewChild('messageDiv', { static: true })
    messageDiv: ElementRef;

    limit = 5;
    arrayFormBank?: Array<FormBank> = new Array<FormBank>();


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
        LoggerService.log('Init generateForm()');
        this.arrayFormBank = new Array<FormBank>();
        // Generator IBAN and credit card
        for (let i = 1; i <= this.limit; i++) {
            const creditCardNumber: string = BankUtils.generateCreditCardNumber();
            const imageCreditCard: string = BankUtils.getImageCreditCard(creditCardNumber);
            this.arrayFormBank.push(new FormBank(BankUtils.formaterSpace4digits(BankUtils.generateIBAN()),
                BankUtils.formaterSpace4digits(creditCardNumber), imageCreditCard));
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
