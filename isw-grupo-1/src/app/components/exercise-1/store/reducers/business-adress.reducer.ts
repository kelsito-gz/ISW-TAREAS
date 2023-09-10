import { createReducer, on } from '@ngrx/store';

import * as BusinessAdressActions from '../actions/business-adress.actions';
import { BusinessAdress } from '../../models';

export const businessAdressFeatureKey = 'businessAdress';

export interface State {
  businessAdress: BusinessAdress;
}

export const initialState: State = {
  businessAdress: {} as BusinessAdress
};

export const reducer = createReducer(
  initialState,

  on(BusinessAdressActions.setBusinessAdress, (state, { businessAdress }) => ({ ...state, businessAdress }))
);
