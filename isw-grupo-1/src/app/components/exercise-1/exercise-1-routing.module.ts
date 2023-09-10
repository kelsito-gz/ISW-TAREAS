import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuContainer } from './containers/menu/menu.container';

const routes: Routes = [
  { path: '', component: MenuContainer }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ExerciseOneRouting {}
