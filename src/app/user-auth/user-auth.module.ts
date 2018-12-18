import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthRoutingModule } from './user-auth-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUserDiagBoxComponent } from './create-user-diag-box/create-user-diag-box.component';
import { LoginComponent } from './login/login.component';
import { LoginDiagBoxComponent } from './login-diag-box/login-diag-box.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterAdminDiagBoxComponent } from './register-admin-diag-box/register-admin-diag-box.component';

@NgModule({
  declarations: [CreateUserComponent, CreateUserDiagBoxComponent, LoginComponent, LoginDiagBoxComponent, RegisterAdminComponent, RegisterAdminDiagBoxComponent],
  imports: [
    CommonModule,
    UserAuthRoutingModule
  ]
})
export class UserAuthModule { }
