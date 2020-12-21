import {Component, Input, OnInit} from '@angular/core';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {RegistrationCredentials} from '../Models/registrationCredentials';
import {Router} from '@angular/router';
import {UserService} from '../Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentials: RegistrationCredentials;
  repeatPassword = '';
  unmatchPasswordsHidden = true;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
  }

  submit(): void {
  }

  togglePasswordHide(): void {
  }

  verifyCredentials(): boolean {
    return false;
  }

  displayAlert(message: string, icon: string, doRedirect: boolean): void {
  }

  verifyFio(): string {
    return '';
  }

  verifyPhone(): string {
    return '';
  }

  verifyPassword(): string {
    return '';
  }

  checkRepeatedPassword(): void {
  }
}
