import { Component, OnInit } from '@angular/core';
import { BusinessAdress, City } from '../../models';
import { setBusinessAdress } from '../../store/actions/business-adress.actions';
import { Store } from '@ngrx/store';
import { selectCitys } from '../../store/selectors/citys.selectors';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-adress-container',
  templateUrl: './business-adress.container.html'
})
export class BusinessAdressContainer implements OnInit {
  constructor(private store: Store, private router: Router) {}

  citys$: Observable<City[]>;

  ngOnInit(): void {
    this.citys$ = this.store.select(selectCitys);
  }

  onBusinessAdressSubmit(businessAdress: BusinessAdress) {
    this.store.dispatch(setBusinessAdress({ businessAdress }));
    this.router.navigate([ 'delivereat' ]);
  }
}
