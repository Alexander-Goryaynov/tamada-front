import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {RegistrationCredentials} from '../Models/registrationCredentials';
import {RegistrationCode} from '../Models/registrationCode';
import {TokensModel} from '../Models/tokensModel';
import {UserInfo} from '../Models/userInfo';
import {adminPhone, apiUrl} from '../../environments/environment';
import {Role} from '../Enums/role';
import {RegistrationResponse} from '../Models/registrationResponse';
import {LoginModel} from '../Models/LoginModel';
import {tap} from 'rxjs/operators';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private tokenApiUrl = `${apiUrl}auth/v1/tokens`;
  private registerApiUrl = `${apiUrl}auth/v1/register`;
  private checkCodeApiUrl = `${apiUrl}auth/v1/check-code`;
  static currentToken: string = '';
  static currentRole: Role;
  static currentPhoneVerification: RegistrationResponse;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
  }

  login(login: string, password: string): Observable<TokensModel> {
    let body = new LoginModel();
    body.login = login;
    body.password = password;
    if (login.localeCompare(adminPhone) === 0) {
      body.role = Role.ADMIN;
    } else {
      body.role = Role.CUSTOMER;
    }
    return this.http
      .post<TokensModel>(this.tokenApiUrl, body)
      .pipe(
        tap(
          (result) => {
            if (result) {
              console.log(result);
              this.cookieService.set('accessToken', result.accessToken);
              this.cookieService.set('refreshToken', result.refreshToken);
              let decodedJwt: any = jwt_decode(result.accessToken);
              this.cookieService.set('userPhone', decodedJwt.sub);
              this.cookieService.set('role', decodedJwt.role);
            }
          }
        )
      );
  }

  logout(): void {
    this.cookieService.delete('accessToken');
    this.cookieService.delete('refreshToken');
  }

  register(creds: RegistrationCredentials): Observable<RegistrationResponse> {
    return this.http
      .post<RegistrationResponse>(this.registerApiUrl, creds)
      .pipe(tap(result => {
        if (result) {
          this.cookieService.set('currentPhone', result.phone);
          this.cookieService.set('currentCodeId', result.codeId.toString());
        }
      }));
  }

  verifyPhone(code: RegistrationCode): Observable<TokensModel> {
    // todo
    return new Observable<TokensModel>();
  }

  update(creds: RegistrationCredentials): Observable<UserInfo> {
    // todo
    return new Observable<UserInfo>();
  }

  /*getUserInfo(): UserInfo {
    let userViewModel = new UserInfo();
    let user = AppComponent.database.getUser(UserService.currentUser);
    userViewModel.name = user.name;
    userViewModel.phone = user.phone;
    return userViewModel;
  }*/

  isAdmin(): boolean {
    return (UserService.currentRole == Role.ADMIN);
  }
}
