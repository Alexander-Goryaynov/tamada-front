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

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: Observable<JwtResponse>;

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
    // TODO
  }

  login(login: string, password: string): Observable<JwtResponse> {
    // todo
    return new Observable<JwtResponse>();
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
