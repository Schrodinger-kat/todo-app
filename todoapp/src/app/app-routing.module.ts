import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './Components/todo/todo.component';
import { from } from 'rxjs';
import {AboutComponent} from './Components/pages/about/about.component';
const routes: Routes = [
  { path: '',component: TodoComponent },
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
