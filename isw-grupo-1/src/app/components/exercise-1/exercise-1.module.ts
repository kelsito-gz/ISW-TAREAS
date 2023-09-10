import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared';
import { StoreModule } from '@ngrx/store';
import * as fromExercise1Store from './store';
import { MenuContainer } from './containers/menu/menu.container';
import { ExerciseOneRouting } from './exercise-1-routing.module';

@NgModule({
  declarations: [
    MenuContainer
  ],
  imports: [
    CommonModule,
    SharedModule,
    ExerciseOneRouting,
    StoreModule.forFeature(fromExercise1Store.exercise1FeatureKey, fromExercise1Store.reducers, { metaReducers: [] })
  ]
})
export class ExerciseOneModule {}
