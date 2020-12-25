import { Component, OnInit } from '@angular/core';
import {RegistrationCredentials} from '../../Models/registrationCredentials';
import {UserModel} from '../../DataStorage/DataModels/UserModel';
import {UserService} from '../../Services/user.service';
import {Router} from '@angular/router';
import {UserInfo} from '../../Models/userInfo';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrls: ['./change-profile.component.css']
})
export class ChangeProfileComponent implements OnInit {

  swalMessage = '';
  swalVisibility = false;
  swalIcon = 'error';
  newUser: UserInfo;
  unmatchPasswordsHidden = true;
  repeatedPassword: string = '';
  oldPassword: string = '';
  isAdmin: boolean;
  specSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '>', '<',
    '/', '\\', '.', ',', '[', ']', '{', '}', '~', ':', ';', '|', '№'];

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.newUser = new UserInfo();
  }

  ngOnInit(): void {
    //let user = this.userService.getUserInfo();
    // this.newUser.phone = user.phone;
    // this.newUser.name = user.name;
    this.isAdmin = this.userService.isAdmin();
  }

  onSubmit(): void {
    if (!this.verifyOldPassword(this.oldPassword)) {
      this.displayAlert('Неверный пароль', 'error', false);
      return;
    }
    if (!this.validateInput()) {
      return;
    }
    this.userService.update(this.newUser);
    this.displayAlert('Обновлено успешно', 'success', true);
  }

  verifyOldPassword(password: string): boolean {
    let oldPassword = this.userService.getUserInfo().password;
    return oldPassword.localeCompare(password) === 0;
  }

  validateInput(): boolean {
    this.checkRepeatedPassword();
    if (!this.unmatchPasswordsHidden) {
      return false;
    }
    const passwordResult = this.verifyPassword();
    const fioResult = this.verifyFio();
    if (passwordResult.localeCompare('OK') !== 0) {
      this.displayAlert(passwordResult, 'error', false);
      return false;
    }
    if (fioResult.localeCompare('OK') !== 0) {
      this.displayAlert(fioResult, 'error', false);
      return false;
    }
    return true;
  }

  displayAlert(message: string, icon: string, doRedirect: boolean): void {
    this.swalMessage = message;
    this.swalIcon = icon;
    this.swalVisibility = true;
    if (doRedirect) {
      setTimeout(() => {
        this.router.navigateByUrl('/orders-view');
      }, 2000);
    } else {
      setTimeout(() => {
        this.swalVisibility = false;
      }, 2000);
    }
  }

  verifyFio(): string {
    const fio = this.newUser.name;
    if (this.containsNumericSymbols(fio)) {
      return 'ФИО не может содержать цифр';
    }
    if (fio.split(' ').length !== 3 && !this.isAdmin) {
      return 'ФИО должно состоять из трёх слов';
    }
    return 'OK';
  }

  verifyPassword(): string {
    const password = this.newUser.password;
    if (password.length < 8) {
      return 'Пароль слишком короткий';
    } else if (!(this.containsNumericSymbols(password) && this.containsSpecSymbols(password))) {
      return 'Пароль должен содержать хотя бы 1 цифру и 1 спецсимвол';
    } else {
      return 'OK';
    }
  }

  checkRepeatedPassword(): void {
    this.unmatchPasswordsHidden = (this.repeatedPassword.localeCompare(this.newUser.password) === 0);
    if (this.repeatedPassword === '' && this.newUser.password === '') {
      this.unmatchPasswordsHidden = true;
    }
  }

  containsSpecSymbols(password: string): boolean {
    for (let i = 0; i < this.specSymbols.length; i++) {
      if (password.indexOf(this.specSymbols[i]) > -1) {
        return true;
      }
    }
    return false;
  }

  containsNumericSymbols(password: string): boolean {
    for (let i = 0; i < password.length; i++) {
      const asciiCode = password[i].charCodeAt(0);
      if (asciiCode >= 48 && asciiCode <= 57) {
        return true;
      }
    }
    return false;
  }

  goBack(): void {
    setTimeout(() => {
      this.router.navigateByUrl('/orders-view');
    }, 1000);
  }
}
