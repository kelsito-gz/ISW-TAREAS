import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { RouterEffects } from './effects';
import * as fromRouter from './reducers/router.reducer';

export interface State {
  [fromRouter.routerFeatureKey]: fromRouter.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromRouter.routerFeatureKey]: fromRouter.reducer
};

export const effects: any[] = [ RouterEffects ];
