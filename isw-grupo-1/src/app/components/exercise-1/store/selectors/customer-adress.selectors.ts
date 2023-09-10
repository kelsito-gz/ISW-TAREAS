import { createSelector } from '@ngrx/store';
import { selectExercise1FeatureKey } from '..';

const selectCustomerAdressFeature = createSelector(selectExercise1FeatureKey, (state) => state.customerAdress);

export const selectCustomerAdress = createSelector(selectCustomerAdressFeature, (state) => state.customerAdress);
