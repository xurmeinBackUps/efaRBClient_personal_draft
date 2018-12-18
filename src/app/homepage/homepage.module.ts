import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { MissionComponent } from './mission/mission.component';

import { UserAuthModule } from '../user-auth/user-auth.module';
import { LoginComponent } from '../user-auth/login/login.component';
import { LoginDiagBoxComponent } from '../user-auth/login-diag-box/login-diag-box.component';
import { RegisterAdminComponent } from '../user-auth/register-admin/register-admin.component';
import { RegisterAdminDiagBoxComponent } from '../user-auth/register-admin-diag-box/register-admin-diag-box.component';

@NgModule({
  declarations: [
    SplashComponent, 
    AboutComponent, 
    MissionComponent,
    LoginComponent,
    LoginDiagBoxComponent,
    RegisterAdminComponent,
    RegisterAdminDiagBoxComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    UserAuthModule
  ],
  bootstrap: [
    LoginComponent,
    RegisterAdminComponent
  ],
  entryComponents: [
    RegisterAdminDiagBoxComponent,
    LoginDiagBoxComponent
  ]
})
export class HomepageModule { }
