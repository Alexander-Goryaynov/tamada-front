import { Component, OnInit } from '@angular/core';
import {RegistrationCredentials} from '../../Models/registrationCredentials';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrls: ['./change-profile.component.css']
})
export class ChangeProfileComponent implements OnInit {

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
