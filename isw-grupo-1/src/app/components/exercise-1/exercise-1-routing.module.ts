import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuContainer } from './containers/menu/menu.container';
import { ProductDataContainer } from './containers/product-data/product-data.container';
import { BusinessAdressContainer } from './containers/business-adress/business-adress.container';
import { CustomerAdressContainer } from './containers/customer-adress/customer-adress.container';
import { PaymentContainer } from './containers/payment/payment.container';

const routes: Routes = [
  { path: '', component: MenuContainer },
  { path: 'producto', component:  ProductDataContainer},
  { path: 'local', component:  BusinessAdressContainer},
  { path: 'domicilio', component:  CustomerAdressContainer},
  { path: 'pago', component:  PaymentContainer},
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ExerciseOneRouting {}
