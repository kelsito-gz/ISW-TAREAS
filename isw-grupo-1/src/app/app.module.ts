import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ExerciseListComponent } from './components/exercise-list/exercise-list.component';
import { SharedModule } from './shared';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { effects, reducers } from './store';
import * as fromRouter from './store/reducers/router.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgbModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot({
      stateKey: fromRouter.routerFeatureKey,
      serializer: fromRouter.CustomSerializer
    })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
