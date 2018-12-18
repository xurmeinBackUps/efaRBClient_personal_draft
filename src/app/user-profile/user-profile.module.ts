import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { AdminAPItoolComponent } from './admin-apitool/admin-apitool.component';
import { UserJournalComponent } from './user-journal/user-journal.component';
import { ContentTableComponent } from './content-table/content-table.component';

import { UserAuthModule } from '../user-auth/user-auth.module';
import { CreateUserComponent } from '../user-auth/create-user/create-user.component';
import { CreateUserDiagBoxComponent } from '../user-auth/create-user-diag-box/create-user-diag-box.component';


@NgModule({
  declarations: [
    ProfileComponent,
    AdminAPItoolComponent, 
    UserJournalComponent, 
    ContentTableComponent,
    CreateUserComponent,
    CreateUserDiagBoxComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    UserAuthModule
  ],
  bootstrap: [
    CreateUserComponent
  ],
  entryComponents: [
    CreateUserDiagBoxComponent
  ]
})
export class UserProfileModule { }
