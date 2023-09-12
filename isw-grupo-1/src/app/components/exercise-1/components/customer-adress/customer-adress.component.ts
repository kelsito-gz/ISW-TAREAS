import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City, CustomerAdress } from '../../models';

@Component({
  selector: 'app-customer-adress',
  templateUrl: './customer-adress.component.html',
  styleUrls: ['./customer-adress.component.css']
})
export class CustomerAdressComponent {
  constructor(private fb: FormBuilder) {}

  @Input() citys: City[];
  @Output() submit: EventEmitter<CustomerAdress> = new EventEmitter<CustomerAdress>();

  form: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      adress: [ '', [ Validators.required ] ],
      number: [ '', [ Validators.required ] ],
      city: [ '', [ Validators.required ] ],
      asSoonAsItPosible: [ false ],
      date: [ '', [ Validators.required ]]
    })
  }

  onSoonChange() {
    this.date.reset();
    if (this.asSoonAsItPosible.value) {
      this.date.clearValidators();
      this.date.disable();
    } else {
      this.date.setValidators([Validators.required]);
      this.date.enable();
    }
    this.date.updateValueAndValidity();
  }

  get asSoonAsItPosible(): AbstractControl {
    return this.form.get('asSoonAsItPosible');
  }

  get adress(): AbstractControl {
    return this.form.get('adress');
  }

  get number(): AbstractControl {
    return this.form.get('number');
  }

  get city(): AbstractControl {
    return this.form.get('city');
  }

  get date(): AbstractControl {
    return this.form.get('date');
  }

  onCustomerAdressSubmit() {
    this.submit.emit({
      street: this.adress.value,
      number: this.number.value,
      city: this.city.value,
      receiveItSoon: this.asSoonAsItPosible.value,
      deadline: this.date.value
    } as CustomerAdress)
  }
}
