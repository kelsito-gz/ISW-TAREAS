import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.css']
})
export class ProductDataComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  form: FormGroup;
  isAmmountRequired: boolean = true;
  imageUrl: string | ArrayBuffer = '';

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      description: [ '', [ Validators.required ] ],
      ammount: [ '' ],
      paymentRequired: [ true ],
      image: []
    })
  }


  togglePaymentRequired() {
    this.isAmmountRequired = !this.isAmmountRequired;
    this.ammount.reset();
    if (!this.isAmmountRequired) {
      this.ammount.clearValidators();
      this.ammount.disable();
    } else {
      this.ammount.setValidators([Validators.required]);
      this.ammount.enable();
    }
    this.ammount.updateValueAndValidity();
  }

  file_store: FileList;
  file_list: Array<string> = [];

  handleFileInputChange(l: FileList): void {
    this.file_store = l;
    if (l.length) {
      const f = l[0];
      const count = l.length > 1 ? `(+${l.length - 1} files)` : '';
      this.image.patchValue(`${f.name} ${count}`);
      this.readImage(f);
    } else {
      this.image.patchValue('');
      this.imageUrl = ''; // Limpiar la vista previa si no se selecciona una imagen
    }
  }

  handleSubmit(): void {
    var fd = new FormData();
    this.file_list = [];
    for (let i = 0; i < this.file_store.length; i++) {
      fd.append("files", this.file_store[i], this.file_store[i].name);
      this.file_list.push(this.file_store[i].name);
    }
  }

  private readImage(file: File): void {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(file);
  }

  get ammount(): AbstractControl {
    return this.form.get('ammount');
  }

  get image(): AbstractControl {
    return this.form.get('image')
  }
}
