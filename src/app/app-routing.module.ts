import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LoginComponent } from './login/login.component';
import { RequestListComponent } from './request-list/request-list.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', component: LoginComponent , pathMatch:'full'  },
  {path:'forgetPassword',component:ForgotPasswordComponent},
  {path:'Register', component: RegisterComponent },
  { path: 'Home', component: DashBoardComponent}, 
  { path: 'myRequests', component: RequestListComponent},
  { path: 'newRequest', component: NewRequestComponent},
  { path: 'profile', component: ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
