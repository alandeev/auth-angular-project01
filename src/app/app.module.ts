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
import { SideBarMasterComponent } from './pages/master-dash/components/side-bar-master/side-bar-master.component';
import { UserDetailComponent } from './pages/master-dash/pages/user-detail/user-detail.component';
import { IndexMasterComponent } from './pages/master-dash/pages/index-master/index-master.component';

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
    component: MasterDashComponent,
    canActivate: [isConnected]
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
    TopBarMasterComponent,
    SideBarMasterComponent,
    UserDetailComponent,
    IndexComponent,
    IndexMasterComponent
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
