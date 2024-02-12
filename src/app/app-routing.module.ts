import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MindenfeleComponent } from './mindenfele/mindenfele.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:"", component:MindenfeleComponent},
  {path:"minden", component:MindenfeleComponent},
  {path:"userlist", component:UserListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
