import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { NavigationComponent } from './navigation/navigation.component';
// import { LoginComponent } from './home/home.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DonationTypeComponent } from './donation-type/donation-type.component';
import { DonationTypesEditorComponent } from './donation-types-editor/donation-types-editor.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { DonationsComponent } from './donations/donations.component';
import { DonationsListComponent } from './donations-list/donations-list.component';

const routes: Routes = [
  {path: 'cart', component: CartComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'navigation', component: NavigationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user-management', canActivate: [AdminAuthGuard], component: AdminViewComponent },
  // { path: 'donation', canActivate: [AuthGuard], component: MakeDonationsComponent },
  // { path: 'mydonations', canActivate: [AuthGuard], component: MyDonationsComponent },
  // { path: 'personalInfo', canActivate: [AuthGuard], canDeactivate: [PersonalInfoCanDeactivateService], component: RegistrationComponent },

  // { path: 'donation-management', canActivate: [AdminAuthGuard], component: DonationManagementComponent },
  // { path: 'charity-management', canActivate: [AdminAuthGuard], component: CharityManagerComponent }
  {path: 'types', component: DonationTypeComponent},
  {path: 'typesform', component: DonationTypesEditorComponent},
  {path: 'donationslist', component: DonationsListComponent},

  {path: 'userinfo', component: UserinfoComponent},
  {path: 'makedonation', component: DonationsComponent},
  {path: 'makedonations/continue', component: DonationsComponent},
  {path: 'cart', component: CartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
