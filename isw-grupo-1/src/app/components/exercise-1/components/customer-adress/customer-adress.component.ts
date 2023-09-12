import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusinessAdress, City, CustomerAdress } from '../../models';

@Component({
  selector: 'app-customer-adress',
  templateUrl: './customer-adress.component.html',
  styleUrls: ['./customer-adress.component.css']
})
export class CustomerAdressComponent {
  constructor(private fb: FormBuilder) {}

  @Input() citys: City[];
  @Input() businessAdress: BusinessAdress;
  @Output() submit: EventEmitter<CustomerAdress> = new EventEmitter<CustomerAdress>();
  maxDate: Date;
  today: Date;

  form: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.today = new Date();
    this.form = this.fb.group({
      adress: [ '', [ Validators.required ] ],
      number: [ '', [ Validators.required ] ],
      city: [ '', [ Validators.required, this.validatePlace ] ],
      asSoonAsItPosible: [ false ],
      date: [ '', [ Validators.required ]]
    })
  }

  validatePlace = (control: AbstractControl): { [key: string]: boolean } | null => {
    if(this.businessAdress.city != control.value) {
      return { 'ciudadInvalida': true }
    }
    return null;
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
    if(this.form.valid) {
      this.submit.emit({
        street: this.adress.value,
        number: this.number.value,
        city: this.city.value,
        receiveItSoon: this.asSoonAsItPosible.value,
        deadline: this.date.value
      } as CustomerAdress);
    }
  }
}
