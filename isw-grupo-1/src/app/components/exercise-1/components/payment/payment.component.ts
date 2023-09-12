import { Component, EventEmitter, Output, Input, OnInit, OnChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardPaymentType, CashPaymentType, Payment, ProductData } from '../../models';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnChanges {
  constructor(private fb: FormBuilder) {}

  form: FormGroup;

  @Output() emitPayment: EventEmitter<Payment> = new EventEmitter<Payment>();

  @Input() productData: ProductData;

  ngOnChanges() {
    if(this.productData) {
      this.form = this.fb.group({
        isCash: [ false ],
        ammountCash: [ '', [ this.validarMontoEfectivo ] ],
        cardNumber: [ '', [ Validators.required, this.validarTarjeta ] ],
        cardSecurity: [ '', [ Validators.required ] ],
        fullName: [ '', [ Validators.required ] ],
        expiration: [ '', [ Validators.required, this.validarVencimiento ] ]
      })
      this.ammountCash.disable();
    }
  }

  validarMontoEfectivo(control: AbstractControl): { [key: string]: boolean } | null {
    if(this.productData && this.productData != undefined) {
      const value = parseFloat(control.value);
      if (this.productData && this.productData.ammount && value <= (this.productData.ammount + this.productData.deliveryAmount)) {
        return { 'montoInvalido': true }
      }
    }
    return null;
  }

  validarTarjeta(control: AbstractControl): { [key: string]: boolean } | null {
    const visaRegex = /^4\d{15}$/;
  
    if (control.value && !visaRegex.test(control.value)) {
      return { 'tarjetaInvalida': true };
    }
    return null;
  }

  validarVencimiento(control: AbstractControl): { [key: string]: boolean } | null {
    const fecha: string = control.value;
  
    if (!/^(0[1-9]|1[0-2])\d{2}$/.test(fecha)) {
      return { 'formatoInvalido': true };
    }
    
    const today = new Date();
    const month = today.getMonth()+1;
    const year = today.getFullYear() % 100;
    const yearControl = parseInt(fecha.substring(2, 4));
    const monthControl = parseInt(fecha.substring(0, 2));
    // conbtrol pattern MM/YY
    if(year > yearControl || ( year == yearControl && month > monthControl)) {
      return { 'vencida': true };
    }
    return null;
  }
  
  onTypePaymentChange() {
    if(this.isCash.value) {
      this.ammountCash.setValidators([ Validators.required ]);
      this.cardNumber.clearValidators();
      this.cardSecurity.clearValidators();
      this.fullName.clearValidators();
      // Clean data
      this.expiration.patchValue('');
      this.cardNumber.patchValue('');
      this.cardSecurity.patchValue('');
      this.fullName.patchValue('');
      // Disable
      this.expiration.disable();
      this.cardNumber.disable();
      this.cardSecurity.disable();
      this.fullName.disable();
      // Enable
      this.ammountCash.enable();
    } else {
      this.ammountCash.clearValidators();
      this.cardNumber.setValidators([Validators.required, Validators.pattern('4111[]1111[]1111[]1111')]);
      this.cardSecurity.setValidators([Validators.required]);
      this.fullName.setValidators([Validators.required]);
      this.expiration.setValidators([Validators.required]);
      // Clean data
      this.ammountCash.patchValue('');
      // Disable
      this.ammountCash.disable();
      // Enable
      this.expiration.enable();
      this.cardNumber.enable();
      this.cardSecurity.enable();
      this.fullName.enable();
    }
    this.ammountCash.updateValueAndValidity();
    this.cardNumber.updateValueAndValidity();
    this.cardSecurity.updateValueAndValidity();
    this.fullName.updateValueAndValidity();
    this.expiration.updateValueAndValidity();
  }

  get isCash(): AbstractControl {
    return this.form.get('isCash');
  }

  get ammountCash(): AbstractControl {
    return this.form.get('ammountCash');
  }

  get cardNumber(): AbstractControl {
    return this.form.get('cardNumber');
  }

  get cardSecurity(): AbstractControl {
    return this.form.get('cardSecurity');
  }

  get fullName(): AbstractControl {
    return this.form.get('fullName');
  }

  get expiration(): AbstractControl {
    return this.form.get('expiration');
  }

  onPaymentSubmit() {
    if (this.form.valid) {
      if (this.isCash.value) {
        this.emitPayment.emit({
          isCash: true,
          cash: {
            cashAmount: this.ammountCash.value
          } as CashPaymentType
        } as Payment)
      } else {
        this.emitPayment.emit({
          isCash: false,
          card: {
            cardNumber: this.cardNumber.value,
            fullName: this.fullName.value,
            expiration: this.expiration.value,
            securityCode: this.cardSecurity.value
          } as CardPaymentType
        } as Payment)
      }
    }
  }
}
