import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// FORMS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// MATERIAL2
import { MatInputModule, MatCardModule } from '@angular/material';
// SPAZBOT
import { AppComponent } from './app.component';
import { RoutesModule } from './routes.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
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
