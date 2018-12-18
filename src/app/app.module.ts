import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatInputModule,
  MatSlideToggleModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUserDiagBoxComponent } from './create-user-diag-box/create-user-diag-box.component';
import { LoginComponent } from './login/login.component';
import { LoginDiagBoxComponent } from './login-diag-box/login-diag-box.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterAdminDiagBoxComponent } from './register-admin-diag-box/register-admin-diag-box.component';

import { HomepageModule } from './homepage/homepage.module';
import { UserProfileModule } from './user-profile/user-profile.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserDiagBoxComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HomepageModule,
    UserAuthModule,
    UserProfileModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
