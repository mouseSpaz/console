import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatButton, MatCheckbox, MatTableModule } from '@angular/material';

// FORMS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// MATERIAL2
import { MatInputModule, MatCardModule } from '@angular/material';
// SPAZBOT
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { RoutesModule } from './routes.module';
import { TeamtableComponent } from './teams/teamtable/teamtable.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from './services/authentication.guard.service';
import { TokenRequestComponent } from './auth/token-request/token-request.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    MessagesComponent,
    TeamtableComponent,
    TokenRequestComponent,
    ResetPasswordComponent,
  ],
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RoutesModule,

    // MATERIAL 2
    MatInputModule,
    MatCardModule,
  ],
  providers: [
    AuthenticationGuard
  ],
  bootstrap: [AppComponent]
})
export class SpazConsoleAppModule { }
