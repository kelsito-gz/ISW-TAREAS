import { createReducer, on } from '@ngrx/store';

import * as ProductDataActions from '../actions/product-data.actions';
import { ProductData } from '../../models';

export const productDataFeatureKey = 'productData';

export interface State {
  productData: ProductData;
}

export const initialState: State = {
  productData: {} as ProductData
};

export const reducer = createReducer(
  initialState,

  on(ProductDataActions.setProductData, (state, { productData }) => ({ ...state, productData }))
);
