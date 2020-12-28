import {Component, OnInit} from '@angular/core';
import {UserService} from '../Services/user.service';
import {Router} from '@angular/router';
import {NavbarRole} from './NavbarRole';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  role: NavbarRole = NavbarRole.UNAUTHORIZED;
  userName: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private cookieService: CookieService
  ) {
    userService.loggedInRoleEventEmitter.subscribe(
      role => {
        this.setRole(role);
      }
    );
    userService.loggedInNameEventEmitter.subscribe(
      name => {
        this.setUserName(name);
      }
    );
  }

  ngOnInit(): void {
    if (this.cookieService.check('role')) {
      if (this.cookieService.get('role').localeCompare('customer') === 0) {
        this.role = NavbarRole.CUSTOMER;
        this.userService.getUserInfo().subscribe(info => this.setUserName(info.name));
      } else {
        this.role = NavbarRole.ADMIN;
        this.userName = 'Администратор';
      }
    }
  }

  setRole(role: NavbarRole) {
    this.role = role;
  }

  setUserName(fio: string) {
    if (this.role === NavbarRole.ADMIN) {
      this.userName = fio;
    } else if (this.role === NavbarRole.CUSTOMER) {
      // Михаил К.
      this.userName = fio.split(' ')[1] +
        ' ' + fio.split(' ')[0][0] + '.';
    }
  }

  logout(): void {
    this.userService.logout();
    setTimeout(
      () => {
        this.router.navigateByUrl('/main');
      }, 1000);
  }

}
