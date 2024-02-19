import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MindenfeleComponent } from './mindenfele/mindenfele.component';
import { UserListComponent } from './user-list/user-list.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"", component:MindenfeleComponent},
  {path:"signup", component:SignupComponent},
  {path:"signin", component:SigninComponent},
  {path:"profile", component:ProfileComponent},
  {path:"minden", component:MindenfeleComponent},

  {path:"userlist", component:UserListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
