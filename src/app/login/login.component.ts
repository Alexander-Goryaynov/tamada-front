import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../Services/user.service';
import {Router} from '@angular/router';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string;
  password: string;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  togglePasswordHide(): void {
  }

  onSubmit(): void {
  }

  displayError(message: string): void {
  }
}
