import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AboutComponent} from './about/about.component';
import {BookComponent} from './book/book.component';
import {AccountsViewComponent} from './account/accounts-view/accounts-view.component';
import {ChangeProfileComponent} from './account/change-profile/change-profile.component';
import {OrdersViewComponent} from './account/orders-view.component';
import {CreateUpdateAnimatorComponent} from './account/animators-view/create-update-animator/create-update-animator.component';
import {AnimatorsViewComponent} from './account/animators-view/animators-view.component';
import {EventsComponent} from './events/events.component';
import {VerifyPhoneComponent} from './verify-phone/verify-phone.component';
import {IsAuthorized} from './Guards/isAuthorized';
import {IsAdmin} from './Guards/isAdmin';

const routes: Routes = [
  {path: 'main', component: MainComponent, data: {animation: 'Main'}},
  {path: 'login', component: LoginComponent, data: {animation: 'Login'}},
  {path: 'about', component: AboutComponent, data: {animation: 'About'}},
  {path: 'book', component: BookComponent, data: {animation: 'Book'}, canActivate: [IsAuthorized]},
  {path: 'register', component: RegisterComponent, data: {animation: 'Register'}},
  {path: 'accounts-view', component: AccountsViewComponent, data: {animation: 'AccountsView'}, canActivate: [IsAdmin]},
  {path: 'change-profile', component: ChangeProfileComponent, data: {animation: 'ChangeProfile'}, canActivate: [IsAuthorized]},
  {path: 'orders-view', component: OrdersViewComponent, data: {animation: 'OrdersView'}, canActivate: [IsAuthorized]},
  {path: 'create-update-animator/:id', component: CreateUpdateAnimatorComponent, data: {animation: 'CreateUpdateAnimator'},
    canActivate: [IsAdmin]},
  {path: 'animators-view', component: AnimatorsViewComponent, data: {animation: 'AnimatorsView'}, canActivate: [IsAdmin]},
  {path: 'events', component: EventsComponent, data: {animation: 'Events'}},
  {path: 'verify-phone', component: VerifyPhoneComponent, data: {animation: 'VerifyPhone'}},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: '**', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
