import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  // tslint:disable-next-line:ban-types
  type: String = 'password';

  constructor() { }

  ngOnInit(): void { }

  togglePasswordHide(): void {
    if (this.type === 'password') {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
}
