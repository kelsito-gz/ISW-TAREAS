import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-adress',
  templateUrl: './customer-adress.component.html',
  styleUrls: ['./customer-adress.component.css']
})
export class CustomerAdressComponent {
  constructor(private fb: FormBuilder) {}

  form: FormGroup;

  ngOnInit(): void {

  }

  initForm() {
    this.form = this.fb.group({
      
    })
  }
}
