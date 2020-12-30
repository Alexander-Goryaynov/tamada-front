import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../Services/user.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string = '';
  password: string = '';
  swalMessage: string = '';
  swalVisibility: boolean = false;

  @Input()
    // tslint:disable-next-line:ban-types
  type: String = 'password';

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  togglePasswordHide(): void {
    if (this.type === 'password') {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  onSubmit(): void {
    this.userService
      .login(this.login, this.password).subscribe(
      result => {
        setTimeout(() => {
          this.router.navigateByUrl('/orders-view');
        }, 2000);
      },
      (error: HttpErrorResponse) => {
        this.displayError('Неверные данные');
      }
    );
  }

  displayError(message: string): void {
    this.swalMessage = message;
    this.swalVisibility = true;
    setTimeout(() => {
      this.swalVisibility = false;
    }, 2000);
  }
}
