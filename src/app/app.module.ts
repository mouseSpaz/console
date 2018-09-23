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
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { RoutesModule } from './routes.module';
import { TeamtableComponent } from './teams/teamtable/teamtable.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    TeamtableComponent,
    LoginComponent
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class SpazConsoleAppModule { }
