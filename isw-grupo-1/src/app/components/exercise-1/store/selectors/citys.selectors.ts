import { createSelector } from '@ngrx/store';
import { selectExercise1FeatureKey } from '..';

const selectCitysFeature = createSelector(selectExercise1FeatureKey, (state) => state.city);

export const selectCitys = createSelector(selectCitysFeature, (state) => state.citys);
