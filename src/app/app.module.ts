import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {  } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
