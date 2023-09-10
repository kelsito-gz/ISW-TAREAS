import { createAction, props } from '@ngrx/store';
import { BusinessAdress } from '../../models';

export const setBusinessAdress = createAction('[DeliverEats] Set business adress', props<{ businessAdress: BusinessAdress }>());