import { Component, OnInit } from '@angular/core';
import {RegistrationCredentials} from '../../Models/registrationCredentials';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrls: ['./change-profile.component.css']
})
export class ChangeProfileComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  verifyOldPassword(password: string): boolean {
    return false;
  }

  changeCreds(keys: RegistrationCredentials): void {
  }

  displayError(message: string): void {
  }
}
