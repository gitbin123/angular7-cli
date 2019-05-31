import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewNameComponent } from './new-name/new-name.component'
import { New2019Component } from './new2019/new2019.component'
import { ChildComponent } from './child/child.component'


const routes: Routes = [
  { path: 'newname', component: NewNameComponent },
  // { path: 'new2019/:id', component: New2019Component },
  {
    path: 'new2019',
    component: New2019Component,
    children:[{
      path:'child',
      component: ChildComponent
    }]
  },
  {
    path: '',
    redirectTo: 'newname',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
