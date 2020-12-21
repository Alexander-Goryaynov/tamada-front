import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {RegistrationCredentials} from '../Models/registrationCredentials';
import {RegistrationCode} from '../Models/registrationCode';
import {TokensModel} from '../Models/tokensModel';
import {UserInfo} from '../Models/userInfo';
import {AppComponent} from '../app.component';
import {adminPhone} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static currentUser: string = '';

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
    // TODO
  }

  login(login: string, password: string): void {
  }

  logout(): void {
  }

  register(creds: RegistrationCredentials): void {
  }

  verifyPhone(code: RegistrationCode): boolean {
    return false;
  }

  update(creds: RegistrationCredentials): void {
  }

  getUserInfo(): UserInfo {
    return new UserInfo();
  }

  isAdmin(): boolean {
    return false;
  }

  private displayError(): void {
  }
}
