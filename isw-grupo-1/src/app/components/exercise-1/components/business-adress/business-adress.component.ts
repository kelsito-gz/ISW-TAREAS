import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusinessAdress, City } from '../../models';

@Component({
  selector: 'app-business-adress',
  templateUrl: './business-adress.component.html',
  styleUrls: ['./business-adress.component.css']
})
export class BusinessAdressComponent {
  constructor(private fb: FormBuilder) {}

  @Input() citys: City[];
  @Output() submit: EventEmitter<BusinessAdress> = new EventEmitter<BusinessAdress>();

  form: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      adress: [ '', [ Validators.required ] ],
      number: [ '', [ Validators.required ] ],
      city: [ '', [ Validators.required ] ],
    })
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

  onBusinessAdressSubmit() {
    this.submit.emit({
      street: this.adress.value,
      number: this.number.value,
      city: this.city.value
    } as BusinessAdress);
  }
}
