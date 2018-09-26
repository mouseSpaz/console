import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from './services/authentication.guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { TokenRequestComponent } from './auth/token-request/token-request.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

/** Application Routes **/
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reset_password', component: TokenRequestComponent },
  { path: 'reset_password/:token', component: ResetPasswordComponent },
  { path: 'dashboard', canActivate: [AuthenticationGuard], component: DashboardComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule { }
