import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromBusinessParts from './reducers/business-adress.reducer';
import * as fromCitysParts from './reducers/citys.reducer';
import * as fromCustomerAdressParts from './reducers/customer-adress.reducer';
import * as fromPaymentParts from './reducers/payment.reducer';
import * as fromProductDataParts from './reducers/product-data.reducer';

export const exercise1FeatureKey = 'exercise1';

export interface Exercise1State {
  [fromBusinessParts.businessAdressFeatureKey]: fromBusinessParts.State;
  [fromCitysParts.cityFeatureKey]: fromCitysParts.State;
  [fromCustomerAdressParts.customerAdressFeatureKey]: fromCustomerAdressParts.State;
  [fromPaymentParts.paymentFeatureKey]: fromPaymentParts.State;
  [fromProductDataParts.productDataFeatureKey]: fromProductDataParts.State;
}

export const reducers: ActionReducerMap<Exercise1State> = {
  [fromBusinessParts.businessAdressFeatureKey]: fromBusinessParts.reducer,
  [fromCitysParts.cityFeatureKey]: fromCitysParts.reducer,
  [fromCustomerAdressParts.customerAdressFeatureKey]: fromCustomerAdressParts.reducer,
  [fromPaymentParts.paymentFeatureKey]: fromPaymentParts.reducer,
  [fromProductDataParts.productDataFeatureKey]: fromProductDataParts.reducer
};

export const selectExercise1FeatureKey = createFeatureSelector<Exercise1State>(exercise1FeatureKey);
