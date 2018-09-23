import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatButton, MatCheckbox, MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { TeamtableComponent } from './datatables/teamtable/teamtable.component';

@NgModule({
  declarations: [
    AppComponent,
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
