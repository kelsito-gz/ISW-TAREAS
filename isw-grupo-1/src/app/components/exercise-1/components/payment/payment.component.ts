import { Component, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardPaymentType, CashPaymentType, Payment } from '../../models';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  constructor(private fb: FormBuilder) {}

  form: FormGroup;

  submit: EventEmitter<Payment> = new EventEmitter<Payment>();

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      isCash: [ false ],
      ammountCash: [ '' ],
      cardNumber: [ '', [ Validators.required ] ],
      cardSecurity: [ '', [ Validators.required ] ],
      fullName: [ '', [ Validators.required ] ],
      expiration: [ '', [ Validators.required ] ]
    })
    this.ammountCash.disable();
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
      this.cardNumber.setValidators([Validators.required]);
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
        this.submit.emit({
          isCash: true,
          cash: {
            cashAmount: this.ammountCash.value
          } as CashPaymentType
        } as Payment)
      } else {
        this.submit.emit({
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
