import { createSelector } from '@ngrx/store';
import { selectExercise1FeatureKey } from '..';

const selectProductDataFeature = createSelector(selectExercise1FeatureKey, (state) => state.productData);

export const selectProductData = createSelector(selectProductDataFeature, (state) => state.productData);
