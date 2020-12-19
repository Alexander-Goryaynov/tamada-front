import { Component, OnInit } from '@angular/core';
import {RegistrationCredentials} from '../../Models/registrationCredentials';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrls: ['./change-profile.component.css']
})
export class ChangeProfileComponent implements OnInit {

  constructor(private userService: UserService) {
    // todo
  }

  ngOnInit(): void {
    // todo
  }

  verifyOldPassword(password: string): boolean {
    // todo
    return false;
  }

  changeKeys(keys: RegistrationCredentials): void {
    // todo
  }

  displayError(message: string): void {
    // todo
  }
}
