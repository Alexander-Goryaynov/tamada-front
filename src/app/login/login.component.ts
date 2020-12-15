import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  // tslint:disable-next-line:ban-types
  type: String = 'password';

  constructor(private userService: UserService) { }

  ngOnInit(): void { }

  togglePasswordHide(): void {
    if (this.type === 'password') {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  onSubmit(): void {
    // TODO
  }

  displayError(): void {
    // TODO
  }
}
