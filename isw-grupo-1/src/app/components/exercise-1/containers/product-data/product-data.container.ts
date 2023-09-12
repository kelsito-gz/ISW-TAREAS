import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setProductData } from '../../store/actions/product-data.actions';
import { ProductData } from '../../models';

@Component({
  selector: 'app-product-data-container',
  templateUrl: './product-data.container.html'
})
export class ProductDataContainer {
  constructor(private store: Store) {}

  onProductDataSubmit(productData: ProductData) {
    this.store.dispatch(setProductData({ productData }))
  }
}
