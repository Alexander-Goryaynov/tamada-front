import { Component, OnInit } from '@angular/core';
import {RegistrationCredentials} from '../../Models/registrationCredentials';

@Component({
  selector: 'app-change-key',
  templateUrl: './change-key.component.html',
  styleUrls: ['./change-key.component.css']
})
export class ChangeKeyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  verifyOldPassword(password: string): boolean {
    // todo
    return false;
  }

  changeKeys(keys: RegistrationCredentials): void {

  }

  displayError(message: string): void {

  }
}
