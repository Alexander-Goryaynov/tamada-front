import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {RegistrationCredentials} from '../Models/registrationCredentials';
import {RegistrationCode} from '../Models/registrationCode';
import {TokensModel} from '../Models/tokensModel';
import {UserInfo} from '../Models/userInfo';
import {AppComponent} from '../app.component';
import {adminPhone, apiUrl} from '../../environments/environment';
import {NavbarRole} from '../navbar/NavbarRole';
import {Role} from '../Enums/role';
import {RegistrationResponse} from '../Models/registrationResponse';
import {tap} from 'rxjs/operators';
import {LoginModel} from '../Models/LoginModel';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  @Output() loggedInNameEventEmitter: EventEmitter<string> = new EventEmitter();
  @Output() loggedInRoleEventEmitter: EventEmitter<NavbarRole> = new EventEmitter();
  private tokenApiUrl = `${apiUrl}/auth/v1/tokens`;
  private registerApiUrl = `${apiUrl}/auth/v1/register`;
  private checkCodeApiUrl = `${apiUrl}/auth/v1/check-code`;

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
    // TODO
  }

  login(login: string, password: string): Observable<TokensModel> {
    let body = new LoginModel();
    body.login = login;
    body.password = password;
    if (this.isAdmin()) {
      body.role = Role.ADMIN.toUpperCase();
    } else {
      body.role = Role.CUSTOMER.toUpperCase();
    }
    return this.http
      .post<TokensModel>(this.tokenApiUrl, body)
      .pipe(
        tap(
          (result) => {
            if (result) {
              console.log(result);
              this.cookieService.set('access', result.access);
              this.cookieService.set('refresh', result.refresh);
              let decodedJwt: any = this.parseJwt(result.access);
              this.cookieService.set('userPhone', decodedJwt.sub);
              this.cookieService.set('role', decodedJwt.role);
              if (this.isAdmin()) {
                this.loggedInRoleEventEmitter.emit(NavbarRole.ADMIN);
                this.loggedInNameEventEmitter.emit('Администратор');
              } else {
                this.loggedInRoleEventEmitter.emit(NavbarRole.CUSTOMER);
                this.loggedInNameEventEmitter.emit(decodedJwt.sub);
              }
            }
          }
        )
      );
  }

  private parseJwt(token) {
    console.log(token);
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  };

  logout(): void {
    this.cookieService.delete('access');
    this.cookieService.delete('refresh');
    this.cookieService.delete('userPhone');
    this.cookieService.delete('role');
    this.loggedInRoleEventEmitter.emit(NavbarRole.UNAUTHORIZED);
    this.loggedInNameEventEmitter.emit('');
  }

  register(creds: RegistrationCredentials): Observable<RegistrationResponse> {
    return this.http.post<RegistrationResponse>(this.registerApiUrl, creds)
      .pipe(
        tap(
          result => {
            if (result) {
              this.cookieService.set('verifyPhone', result.phone);
              this.cookieService.set('verifyCodeId', result.codeId.toString());
            }
          }
        )
      );
  }

  verifyPhone(code: RegistrationCode): Observable<TokensModel> {
    // todo
    return new Observable<TokensModel>();
  }

  update(newUser: UserInfo): void {
    //AppComponent.database.updateUser(newUser);
    this.loggedInNameEventEmitter.emit(newUser.name);
  }

  getUserInfo(): UserInfo {
    // let userViewModel = new UserInfo();
    // let user = AppComponent.database.getUser(UserService.currentUser);
    // userViewModel.name = user.name;
    // userViewModel.phone = user.phone;
    // userViewModel.password = user.password;
    // return userViewModel;
    return null;
  }

  getUsersList(): UserInfo[] {
    return null;
  }

  isAdmin(): boolean {
    return (this.cookieService.get('role').localeCompare(Role.ADMIN) === 0);
  }

  deleteUser(phone: string): void {
    //AppComponent.database.deleteUser(phone);
  }

  private displayError(): void {
    // todo
  }
}
