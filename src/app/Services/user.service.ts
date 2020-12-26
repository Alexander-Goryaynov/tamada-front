import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {RegistrationCredentials} from '../Models/registrationCredentials';
import {RegistrationCode} from '../Models/registrationCode';
import {TokensModel} from '../Models/tokensModel';
import {UserInfo} from '../Models/userInfo';
import {AppComponent} from '../app.component';
import {adminPhone} from '../../environments/environment';
import {UserModel} from '../DataStorage/DataModels/UserModel';
import {NavbarRole} from '../navbar/NavbarRole';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  @Output() loggedInNameEventEmitter: EventEmitter<string> = new EventEmitter();
  @Output() loggedInRoleEventEmitter: EventEmitter<NavbarRole> = new EventEmitter();
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
    if (login.localeCompare(adminPhone) === 0) {
      this.loggedInRoleEventEmitter.emit(NavbarRole.ADMIN);
      this.loggedInNameEventEmitter.emit('Администратор');
    } else {
      this.loggedInRoleEventEmitter.emit(NavbarRole.CUSTOMER);
      this.loggedInNameEventEmitter.emit(user.name);
    }

  }

  logout(): void {
    UserService.currentUser = '';
    this.loggedInRoleEventEmitter.emit(NavbarRole.UNAUTHORIZED);
    this.loggedInNameEventEmitter.emit('');
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
    this.loggedInNameEventEmitter.emit(newUser.name);
  }

  getUserInfo(): UserInfo {
    let userViewModel = new UserInfo();
    let user = AppComponent.database.getUser(UserService.currentUser);
    userViewModel.name = user.name;
    userViewModel.phone = user.phone;
    userViewModel.password = user.password;
    return userViewModel;
  }

  getUsersList(): UserModel[] {
    return AppComponent.database.getAllUsers();
  }

  isAdmin(): boolean {
    return (UserService.currentUser.localeCompare(adminPhone) === 0);
  }

  deleteUser(phone: string): void {
    AppComponent.database.deleteUser(phone);
  }

  private displayError(): void {
    // todo
  }
}
