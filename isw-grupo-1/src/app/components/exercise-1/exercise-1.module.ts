import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule,
    EffectsModule
  ]
})
export class ExerciseOneModule {}
