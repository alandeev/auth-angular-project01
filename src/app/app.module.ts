import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {  } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { RouterModule } from '@angular/router';

const Routes = [
  // { path: '', component: AppComponent },
  { path: 'sign', component: AuthPageComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
