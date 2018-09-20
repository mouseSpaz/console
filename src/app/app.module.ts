import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatButton, MatCheckbox, MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { MessagesComponent } from './messages/messages.component';
import { UsertableComponent } from './tables/usertable/usertable.component';
import { TeamtableComponent } from './tables/teamtable/teamtable.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    MessagesComponent,
    TeamtableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class SpazConsoleAppModule { }
