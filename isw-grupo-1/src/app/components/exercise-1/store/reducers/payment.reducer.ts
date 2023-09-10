import { createReducer, on } from '@ngrx/store';

import * as PaymentActions from '../actions/payment.actions';
import { Payment } from '../../models';

export const paymentFeatureKey = 'payment';

export interface State {
  paymentMethod: Payment;
}

export const initialState: State = {
  paymentMethod: {} as Payment
};

export const reducer = createReducer(
  initialState,

  on(PaymentActions.setPayment, (state, { paymentMethod }) => ({ ...state, paymentMethod }))
);
