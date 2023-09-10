import { createAction, props } from '@ngrx/store';
import { Payment } from '../../models';

export const setPayment = createAction('[DeliverEats] Set payment', props<{ paymentMethod: Payment }>());