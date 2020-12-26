import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register.component';
import {AboutComponent} from './about/about.component';
import {ChartsModule} from 'ng2-charts';
import {BookComponent} from './book/book.component';
import {OrdersViewComponent} from './account/orders-view.component';
import {AnimatorsViewComponent} from './account/animators-view/animators-view.component';
import {ChangeProfileComponent} from './account/change-profile/change-profile.component';
import {AccountsViewComponent} from './account/accounts-view/accounts-view.component';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {NavbarComponent} from './navbar/navbar.component';
import {CreateUpdateAnimatorComponent} from './account/animators-view/create-update-animator/create-update-animator.component';
import {EventsComponent} from './events/events.component';
import {VerifyPhoneComponent} from './verify-phone/verify-phone.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {IsAdmin} from './Guards/isAdmin';
import {IsAuthorized} from './Guards/isAuthorized';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    BookComponent,
    OrdersViewComponent,
    AnimatorsViewComponent,
    ChangeProfileComponent,
    AccountsViewComponent,
    NavbarComponent,
    CreateUpdateAnimatorComponent,
    EventsComponent,
    VerifyPhoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [IsAdmin, IsAuthorized],
  bootstrap: [AppComponent]
})
export class AppModule {
}
