import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  constructor(private fb: FormBuilder) {}

  form: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      cardNumber: [ '', [ Validators.required ] ],
      cardSecurity: [ '', [ Validators.required ] ],
      fullName: [ '', [ Validators.required ] ],
      expiration: [ '', [ Validators.required ] ]
    })
  }
}
