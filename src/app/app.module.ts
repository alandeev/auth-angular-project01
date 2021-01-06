import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/master-auth/auth/auth.component';
import { RegisterComponent } from './pages/master-auth/register/register.component';
import { MasterAuthComponent } from './pages/master-auth/master-auth.component';
import { MasterDashComponent } from './pages/master-dash/master-dash.component';
import { isConnected, notConnected } from './guards/connectedGuard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { IndexComponent } from './pages/master-auth/index/index.component';
import { TopBarMasterComponent } from './pages/master-dash/components/top-bar-master/top-bar-master.component';

const routes: Routes = [
  { 
    path: '',   
    component: MasterAuthComponent,
    canActivate: [notConnected],
    children: [
        { path: '', component: IndexComponent },
        { path: 'auth', component: AuthComponent },
        { path: 'register', component: RegisterComponent },
        { path: '', redirectTo: '/auth', pathMatch: 'full' },
      ],
    },
  { 
    path: 'painel', 
    canActivate: [isConnected],
    component: MasterDashComponent 
  },
  {
    path: '**',
    component: NotFoundComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AuthComponent,
    RegisterComponent,
    MasterAuthComponent,
    MasterDashComponent,
    TopBarMasterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
