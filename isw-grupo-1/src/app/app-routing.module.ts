import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseListComponent } from './components/exercise-list/exercise-list.component';

const routes: Routes = [
  { path: '', component: ExerciseListComponent },
  { path: 'delivereat', loadChildren: () => import('./components/exercise-1/exercise-1.module').then((h) => h.ExerciseOneModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false } )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
