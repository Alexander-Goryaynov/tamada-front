import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {RegistrationCredentials} from '../Models/registrationCredentials';
import {RegistrationCode} from '../Models/registrationCode';
import {TokensModel} from '../Models/tokensModel';
import {UserInfo} from '../Models/userInfo';
import {apiUrl} from '../../environments/environment';
import {Role} from '../Enums/role';
import {RegistrationResponse} from '../Models/registrationResponse';
import {catchError} from 'rxjs/operators';

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

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
    // TODO
  }

  /*login(login: string, password: string): void {
    let user = AppComponent.database.getUser(login);
    if (user === undefined || user.password.localeCompare(password) !== 0) {
      throw 'Неверные данные';
    }
    UserService.currentUser = login;
    console.log('УСПЕШНО:' + UserService.currentUser);
  }*/

  logout(): void {
    // todo
  }

  register(creds: RegistrationCredentials): Observable<any> {
    return this.http
      .post<RegistrationResponse>(this.registerApiUrl, creds);
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

  private displayError(): void {
    // todo
  }
}
