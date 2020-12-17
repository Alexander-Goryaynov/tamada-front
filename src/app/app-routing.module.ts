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

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'book', component: BookComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'accounts-view', component: AccountsViewComponent},
  {path: 'change-profile', component: ChangeProfileComponent},
  {path: 'orders-view', component: OrdersViewComponent},
  {path: 'create-update-animator', component: CreateUpdateAnimatorComponent},
  {path: 'animators-view', component: AnimatorsViewComponent},
  {path: 'events', component: EventsComponent},
  {path: 'verify-phone', component: VerifyPhoneComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: '**', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
