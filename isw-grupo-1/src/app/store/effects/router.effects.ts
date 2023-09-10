import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { tap } from 'rxjs/operators';

import * as RouterActions from '../actions/router.actions';

@Injectable()
export class RouterEffects {
  constructor(private readonly actions$: Actions, private readonly router: Router, private readonly location: Location) {}

  public navigate$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(RouterActions.go),
        tap(({ path, query: queryParams, extras }) => this.router.navigate(path, { queryParams, ...extras }))
      );
    },
    { dispatch: false }
  );

  public navigateBack$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(RouterActions.back),
        tap(() => this.location.back())
      );
    },

    { dispatch: false }
  );

  public navigateForward$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(RouterActions.forward),
        tap(() => this.location.forward())
      );
    },
    { dispatch: false }
  );
}
