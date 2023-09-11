import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.css']
})
export class ProductDataComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  form: FormGroup;
  isAmmountRequired: boolean = true;

  imageUrl: string = '';

  ngOnInit(): void {

  }

  initForm() {
    this.form = this.fb.group({
      description: [ '', [ Validators.required ] ],
      ammount: [ '' ],
      paymentRequired: [ true ]
    })
  }

  togglePaymentRequired() {
    this.isAmmountRequired = !this.isAmmountRequired;
    if (!this.isAmmountRequired) {
      this.ammount.clearValidators();
    } else {
      this.ammount.setValidators([Validators.required]);
    }
    this.ammount.updateValueAndValidity();
  }

  
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Leer la imagen seleccionada y asignar la URL a imageUrl para previsualización
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      // Limpiar la previsualización si no se selecciona ninguna imagen
      this.imageUrl = '';
    }
  }

  get ammount(): AbstractControl {
    return this.form.get('ammount');
  }
}
