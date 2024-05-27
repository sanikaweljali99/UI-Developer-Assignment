import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule,Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { HeaderComponent } from './header/header.component';


export const routes: Routes = [
  // { path: 'register', component: RegistrationComponent },
  // { path: 'profile', component: ProfileComponent },
  { path: 'homepage', component: HomepageComponent },
  // { path: 'header', component: HeaderComponent },
  // { path: 'subscription', component: SubscriptionComponent },
  // { path: '', redirectTo: '/register', pathMatch: 'full' },
  // { path: '', redirectTo: '/header', pathMatch: 'full' },
  // { path: '', redirectTo: '/profile', pathMatch: 'full' },
  // { path: '', redirectTo: '/subscription', pathMatch: 'full' },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  {
    path:'Register',
    component:RegistrationComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'subcription',
    component:SubscriptionComponent
  },
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
