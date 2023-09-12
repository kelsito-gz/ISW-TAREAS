import { Component, OnInit } from '@angular/core';
import { City, CustomerAdress } from '../../models';
import { setBusinessAdress } from '../../store/actions/customer-adress.actions';
import { selectCitys } from '../../store/selectors/citys.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-adress-container',
  templateUrl: './customer-adress.container.html'
})
export class CustomerAdressContainer implements OnInit {
  constructor(private store: Store, private router: Router) {}

  citys$: Observable<City[]>;

  ngOnInit(): void {
    this.citys$ = this.store.select(selectCitys);
  }

  onCustomerAdressSubmit(customerAdress: CustomerAdress) {
    this.store.dispatch(setBusinessAdress({ customerAdress }))
    this.router.navigate([ 'delivereat' ]);
  }
}
