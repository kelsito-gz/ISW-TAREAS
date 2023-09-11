import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City } from '../../models';

@Component({
  selector: 'app-business-adress',
  templateUrl: './business-adress.component.html',
  styleUrls: ['./business-adress.component.css']
})
export class BusinessAdressComponent {
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
    })
  }
}
