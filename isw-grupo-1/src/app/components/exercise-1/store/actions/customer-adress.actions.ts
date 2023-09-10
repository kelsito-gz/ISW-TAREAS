import { createAction, props } from '@ngrx/store';
import { CustomerAdress } from '../../models';

export const setBusinessAdress = createAction('[DeliverEats] Set customer adress', props<{ customerAdress: CustomerAdress }>());