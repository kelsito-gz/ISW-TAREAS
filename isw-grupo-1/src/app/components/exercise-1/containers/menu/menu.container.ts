import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessAdress, CustomerAdress, Payment, ProductData } from '../../models';
import { selectBusinessAdress  } from '../../store/selectors/business-adress.selectors';
import { selectCustomerAdress } from '../../store/selectors/customer-adress.selectors';
import { selectPayment } from '../../store/selectors/payment.selectors';
import { selectProductData } from '../../store/selectors/product-data.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'exerice-one-menu-container',
  templateUrl: './menu.container.html'
})
export class MenuContainer implements OnInit {
  constructor(private store: Store) {
  }

  productData$: Observable<ProductData>;
  customerAdress$: Observable<CustomerAdress>;
  businessAdress$: Observable<BusinessAdress>;
  paymentMethod$: Observable<Payment>;

  ngOnInit(): void {
    this.productData$ = this.store.select(selectProductData);
    this.customerAdress$ = this.store.select(selectCustomerAdress);
    this.businessAdress$ = this.store.select(selectBusinessAdress);
    this.paymentMethod$ = this.store.select(selectPayment);
  }
}
