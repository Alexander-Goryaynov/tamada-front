import {Component, OnInit} from '@angular/core';
import {UserService} from '../Services/user.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-verify-phone',
  templateUrl: './verify-phone.component.html',
  styleUrls: ['./verify-phone.component.css']
})
export class VerifyPhoneComponent implements OnInit {

  code: string = '';
  phone: string;
  codeId: number;
  swalMessage: string = '';
  swalVisibility: boolean = false;
  swalIcon: string = 'error';

  constructor(
    private userService: UserService,
    private cookieService: CookieService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.code.localeCompare('') === 0){
      this.displayAlert('Введите код', 'error', false);
      return;
    }
    this.userService.verifyPhone(this.code).subscribe(
      result => {
        this.displayAlert('Подтверждено', 'success', true);
      },
      error => {
        console.log('VERIF_ERR: ' + error);
        this.displayAlert('Неверный код', 'error', false);
      }
    )
  }

  displayAlert(message: string, icon: string, doRedirect: boolean): void {
    this.swalMessage = message;
    this.swalIcon = icon;
    this.swalVisibility = true;
    setTimeout(() => {
      this.swalVisibility = false;
    }, 2000);
    if (doRedirect) {
      setTimeout(
        () => this.router.navigateByUrl('/orders-view'),
        2000
      );
    }
  }
}
