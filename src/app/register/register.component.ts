import {Component, Input, OnInit} from '@angular/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {RegistrationCredentials} from '../Models/registrationCredentials';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input()
    // tslint:disable-next-line:ban-types
  type: String = 'password';
  swalMessage = '';
  swalVisibility = false;
  swalIcon = 'error';
  credentials: RegistrationCredentials;
  repeatPassword = '';
  unmatchPasswordsHidden = true;
  specSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '>', '<',
    '/', '\\', '.', ',', '[', ']', '{', '}', '~', ':', ';', '|', '№'];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.credentials = new RegistrationCredentials();
  }

  togglePasswordHide(): void {
    if (this.type === 'password') {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  verifyCredentials(): void {
    this.checkRepeatedPassword();
    if (!this.unmatchPasswordsHidden) {
      return;
    }
    const passwordResult = this.verifyPassword();
    const fioResult = this.verifyFio();
    const phoneResult = this.verifyPhone();
    if (passwordResult.localeCompare('OK') !== 0) {
      this.displayAlert(passwordResult, 'error', false);
    } else if (fioResult.localeCompare('OK') !== 0) {
      this.displayAlert(fioResult, 'error', false);
    } else if (phoneResult.localeCompare('OK') !== 0) {
      this.displayAlert(phoneResult, 'error', false);
    } else {
      this.displayAlert('Данные сохранены', 'success', true);
    }
  }

  displayAlert(message: string, icon: string, doRedirect: boolean): void {
    this.swalMessage = message;
    this.swalIcon = icon;
    this.swalVisibility = true;
    if (doRedirect) {
      setTimeout(() => {
        this.router.navigateByUrl('/login');
      }, 2000);
    } else {
      setTimeout(() => {
        this.swalVisibility = false;
      }, 2000);
    }
  }

  verifyFio(): string {
    const fio = this.credentials.name;
    if (this.containsNumericSymbols(fio)) {
      return 'ФИО не может содержать цифр';
    }
    if (fio.split(' ').length !== 3) {
      return 'ФИО должно состоять из трёх слов';
    }
    return 'OK';
  }

  verifyPhone(): string {
    const phone = this.credentials.phone;
    if (!phone.match(/\+7\d{10}/)) {
      return 'Неверный формат номера телефона';
    }
    if (this.containsSpecSymbols(phone)) {
      return 'Номер телефона содержит спецсимволы';
    }
    return 'OK';
  }

  verifyPassword(): string {
    const password = this.credentials.password;
    if (password.length < 8) {
      return 'Пароль слишком короткий';
    } else if (!(this.containsNumericSymbols(password) && this.containsSpecSymbols(password))) {
      return 'Пароль должен содержать хотя бы 1 цифру и 1 спецсимвол';
    } else {
      return 'OK';
    }
  }

  checkRepeatedPassword(): void {
    this.unmatchPasswordsHidden = (this.repeatPassword.localeCompare(this.credentials.password) === 0);
    if (this.repeatPassword === '' && this.credentials.password === '') {
      this.unmatchPasswordsHidden = true;
    }
    console.log(this.credentials.password, this.repeatPassword);
    console.log(this.unmatchPasswordsHidden.toString());
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
}
