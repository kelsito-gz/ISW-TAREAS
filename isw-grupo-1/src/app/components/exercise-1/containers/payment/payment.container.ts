import { Component } from '@angular/core';
import { setPayment } from '../../store/actions/payment.actions';
import { selectProductData } from '../../store/selectors/product-data.selectors';
import { Payment, ProductData } from '../../models';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payment-container',
  templateUrl: './payment.container.html'
})
export class PaymentContainer {
  constructor(private store: Store, private router: Router) {}

  productData$: Observable<ProductData>;

  ngOnInit(): void {
    this.productData$ = this.store.select(selectProductData);
  }

  onPaymentSubmit(paymentMethod: Payment) {
    this.store.dispatch(setPayment({ paymentMethod }))
    this.router.navigate([ 'delivereat' ]);
  }
}
