import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromExercise1Store from './store';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(fromExercise1Store.exercise1FeatureKey, fromExercise1Store.reducers, { metaReducers: [] })
  ]
})
export class ExerciseOneModule {}
