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

  register(creds: RegistrationCredentials): Observable<RegistrationResponse> {
    // todo
    return new Observable<RegistrationResponse>();
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
