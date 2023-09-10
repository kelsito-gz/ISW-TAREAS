import { createSelector } from '@ngrx/store';
import { selectExercise1FeatureKey } from '..';

const selectPaymentFeature = createSelector(selectExercise1FeatureKey, (state) => state.payment);

export const selectPayment = createSelector(selectPaymentFeature, (state) => state.paymentMethod);
