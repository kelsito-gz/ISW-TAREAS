import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  constructor(private fb: FormBuilder) {}

  form: FormGroup;

  ngOnInit(): void {

  }

  initForm() {
    this.form = this.fb.group({
      
    })
  }
}
