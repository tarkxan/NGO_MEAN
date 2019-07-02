import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonationsComponent } from './donations/donations.component';
import { HttpClientModule } from '@angular/common/http'
import { UserService } from './user.service';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DonationTypeComponent } from './donation-type/donation-type.component';
import { DonationTypesEditorComponent } from './donation-types-editor/donation-types-editor.component';
import { UserAuthService } from './services/user-auth.service';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { AdminUserManagementService } from './services/admin-user-management.service';
import { LogoutComponent } from './logout/logout.component';
import { DonationTypeDetailComponent } from './donation-type-detail/donation-type-detail.component';
import { DonationsListComponent } from './donations-list/donations-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DonationsComponent,
    UserinfoComponent,
    UserComponent,
    CartComponent,
    AdminViewComponent,
    HomeComponent,
    LoginComponent,
    NavigationComponent,
    DonationTypeComponent,
    DonationTypesEditorComponent,
    LogoutComponent,
    DonationTypeDetailComponent,
    DonationsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    UserService,
    UserAuthService,
    AuthGuard,
    AdminAuthGuard,
    AdminUserManagementService],

  bootstrap: [AppComponent]
})
export class AppModule { }
