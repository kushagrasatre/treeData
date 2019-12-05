import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeDesginComponent } from './components/tree-desgin/tree-desgin.component';

const routes: Routes = [
  {path: '', component: TreeDesginComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
