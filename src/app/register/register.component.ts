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

  credentials: RegistrationCredentials;
  repeatPassword: string;

  constructor(private router: Router) {
    // todo
  }

  ngOnInit(): void {
    // todo
  }

  togglePasswordHide(): void {
    // todo
  }

  verifyCredentials(): void {
    // todo
  }

  displayAlert(message: string, icon: string, doRedirect: boolean): void {
    // todo
  }

  verifyFio(): string {
    // todo
    return '';
  }

  verifyPhone(): string {
    // todo
    return '';
  }

  verifyPassword(): string {
    // todo
    return '';
  }

  checkRepeatedPassword(): void {
    // todo
  }
}
