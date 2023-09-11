import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City } from '../../models';

@Component({
  selector: 'app-customer-adress',
  templateUrl: './customer-adress.component.html',
  styleUrls: ['./customer-adress.component.css']
})
export class CustomerAdressComponent {
  constructor(private fb: FormBuilder) {}

  @Input() citys: City[];

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

  get date(): AbstractControl {
    return this.form.get('date');
  }
}
