import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {JwtResponse} from '../Models/jwtResponse';
import {Observable} from 'rxjs';
import {RegistrationResponse} from '../Models/registrationResponse';
import {RegistrationCredentials} from '../Models/registrationCredentials';
import {RegistrationCode} from '../Models/registrationCode';
import {TokensModel} from '../Models/tokensModel';
import {apiUrl} from '../../environments/environment';
import {UserInfo} from '../Models/userInfo';
import {AppComponent} from '../app.component';
import {Database} from '../DataStorage/Database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: string;

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
    // TODO
  }

  login(login: string, password: string): void {
    let user = AppComponent.database.getUser(login);
    if (user === undefined || user.password.localeCompare(password) !== 0) {
      throw 'Неверные данные';
    }
    this.currentUser = login;
    console.log('УСПЕШНО:' + this.currentUser);
  }

  logout(): void {
    // todo
  }

  register(creds: RegistrationCredentials): void {
    let newUser = new UserInfo();
    newUser.name = creds.name;
    newUser.password = creds.password;
    newUser.phone = creds.phone;
    newUser.orders = [];
    try {
      AppComponent.database.createUser(newUser);
    } catch (e) {
      throw e;
    }
  }

  verifyPhone(code: RegistrationCode): Observable<TokensModel> {
    // todo
    return new Observable<TokensModel>();
  }

  update(creds: RegistrationCredentials): Observable<UserInfo> {
    // todo
    return new Observable<UserInfo>();
  }

  getUserInfo(): Observable<UserInfo> {
    // todo
    return new Observable<UserInfo>();
  }

  private displayError(): void {
    // todo
  }
}
