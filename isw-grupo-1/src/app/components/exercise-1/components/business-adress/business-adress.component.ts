import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-business-adress',
  templateUrl: './business-adress.component.html',
  styleUrls: ['./business-adress.component.css']
})
export class BusinessAdressComponent {
  constructor(private fb: FormBuilder) {}

  form: FormGroup;

  ngOnInit(): void {

  }

  initForm() {
    this.form = this.fb.group({
      
    })
  }
}
