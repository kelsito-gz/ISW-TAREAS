import { createAction, props } from '@ngrx/store';
import { ProductData } from '../../models';

export const setProductData = createAction('[DeliverEats] Set product data', props<{ productData: ProductData }>());