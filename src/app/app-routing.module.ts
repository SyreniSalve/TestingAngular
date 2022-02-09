import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LecturerPageComponent} from "./components/lecturer-page/lecturer-page.component";
import {PeoplePageComponent} from "./components/people-page/people-page.component";

const routes: Routes = [{
  path: 'lecturer',
  component: LecturerPageComponent
},
  {
    path: 'people',
    component: PeoplePageComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
