import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setProductData } from '../../store/actions/product-data.actions';
import { ProductData } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-data-container',
  templateUrl: './product-data.container.html'
})
export class ProductDataContainer {
  constructor(private store: Store, private router: Router) {}

  onProductDataSubmit(productData: ProductData) {
    this.store.dispatch(setProductData({ productData }));
    this.router.navigate([ 'delivereat' ]);
  }
}
