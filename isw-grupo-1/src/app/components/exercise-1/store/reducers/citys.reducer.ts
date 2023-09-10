import { createReducer, on } from '@ngrx/store';
import { City } from '../../models';

export const cityFeatureKey = 'city';

export interface State {
  citys: City[];
}

export const initialState: State = {
  citys: [
    {
      id: 1,
      description: 'Córdoba'
    } as City,
    {
      id: 2,
      description: 'Villa Carlos Paz'
    } as City,
    {
      id: 3,
      description: 'Santa Rosa de Calamuchita'
    } as City,
    {
      id: 4,
      description: 'Villa General Belgrano'
    } as City,
    {
      id: 5,
      description: 'Cosquín'
    } as City,
    {
      id: 6,
      description: 'Nono'
    } as City,
  ]
};

export const reducer = createReducer(
  initialState
);
