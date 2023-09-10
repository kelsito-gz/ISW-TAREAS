import { createReducer, on } from '@ngrx/store';

import * as CustomerAdressActions from '../actions/customer-adress.actions';
import { CustomerAdress } from '../../models';

export const customerAdressFeatureKey = 'customerAdress';

export interface State {
  customerAdress: CustomerAdress;
}

export const initialState: State = {
  customerAdress: {} as CustomerAdress
};

export const reducer = createReducer(
  initialState,

  on(CustomerAdressActions.setBusinessAdress, (state, { customerAdress }) => ({ ...state, customerAdress }))
);
