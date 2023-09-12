import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared';
import { StoreModule } from '@ngrx/store';
import * as fromExercise1Store from './store';
import { MenuContainer } from './containers/menu/menu.container';
import { ExerciseOneRouting } from './exercise-1-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { ProductDataContainer } from './containers/product-data/product-data.container';
import { CustomerAdressContainer } from './containers/customer-adress/customer-adress.container';
import { BusinessAdressContainer } from './containers/business-adress/business-adress.container';
import { PaymentContainer } from './containers/payment/payment.container';
import { ProductDataComponent } from './components/product-data/product-data.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CustomerAdressComponent } from './components/customer-adress/customer-adress.component';
import { BusinessAdressComponent } from './components/business-adress/business-adress.component';
import { NgxMaskModule } from 'ngx-mask'

const containers = [
  ProductDataContainer,
  CustomerAdressContainer,
  BusinessAdressContainer,
  PaymentContainer,
  MenuContainer
]

const components = [
  MenuComponent,
  ProductDataComponent,
  PaymentComponent,
  CustomerAdressComponent,
  BusinessAdressComponent
]

@NgModule({
  declarations: [
    [ ...containers ],
    [ ...components ]
  ],
  imports: [
    CommonModule,
    SharedModule,
    ExerciseOneRouting,
    NgxMaskModule.forRoot(),
    StoreModule.forFeature(fromExercise1Store.exercise1FeatureKey, fromExercise1Store.reducers, { metaReducers: [] })
  ]
})
export class ExerciseOneModule {}
