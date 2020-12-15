import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ChartsModule } from 'ng2-charts';
import { BookComponent } from './book/book.component';
import { AccountComponent } from './account/account.component';
import { AnimatorsEditComponent } from './animators-edit/animators-edit.component';
import { ChangeKeyComponent } from './account/change-key/change-key.component';
import { ChangeAnimatorComponent } from './animators-edit/change-animator/change-animator.component';
import { AccountsViewComponent } from './accounts-view/accounts-view.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    BookComponent,
    AccountComponent,
    AnimatorsEditComponent,
    ChangeKeyComponent,
    ChangeAnimatorComponent,
    AccountsViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
