import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoaddComponent } from './todoadd/todoadd.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {path:'', component:TodoaddComponent},
  {path:'tasks', component: TasksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
