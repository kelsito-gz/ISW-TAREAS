import { createSelector } from '@ngrx/store';
import { selectExercise1FeatureKey } from '..';

const selectBusinessAdressFeature = createSelector(selectExercise1FeatureKey, (state) => state.businessAdress);

export const selectBusinessAdress = createSelector(selectBusinessAdressFeature, (state) => state.businessAdress);
