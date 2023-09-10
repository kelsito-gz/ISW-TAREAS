import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRouter from '../reducers/router.reducer';

const selectRouterState = createFeatureSelector<fromRouter.State>(fromRouter.routerFeatureKey);

export const selectCurrentRoute = createSelector(selectRouterState, (router) => router?.state);
