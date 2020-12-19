import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login: string;
  private password: string;

  constructor(private userService: UserService) {
    // todo
  }

  ngOnInit(): void {
    // todo
  }

  togglePasswordHide(): void {
    // todo
  }

  onSubmit(): void {
    // TODO
  }

  displayError(): void {
    // TODO
  }
}
