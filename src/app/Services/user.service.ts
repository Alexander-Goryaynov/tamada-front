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
    let user = AppComponent.database.getUser(login);
    if (user === undefined || user.password.localeCompare(password) !== 0) {
      throw 'Неверные данные';
    }
    UserService.currentUser = login;
    console.log('УСПЕШНО:' + UserService.currentUser);
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

  update(newUser: UserInfo): void {
    AppComponent.database.updateUser(newUser);
  }

  getUserInfo(): UserInfo {
    let userViewModel = new UserInfo();
    let user = AppComponent.database.getUser(UserService.currentUser);
    userViewModel.name = user.name;
    userViewModel.phone = user.phone;
    userViewModel.password = user.password;
    return userViewModel;
  }

  isAdmin(): boolean {
    return (UserService.currentUser.localeCompare(adminPhone) === 0);
  }

  private displayError(): void {
    // todo
  }
}
