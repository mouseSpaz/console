import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from './services/authentication.guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

/** Application Routes **/
const routes: Routes = [
  { path: 'login', component: LoginComponent },
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
