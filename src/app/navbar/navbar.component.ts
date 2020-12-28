import {Component, OnInit} from '@angular/core';
import {UserService} from '../Services/user.service';
import {Router} from '@angular/router';
import {NavbarRole} from './NavbarRole';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  role: NavbarRole = NavbarRole.UNAUTHORIZED;
  userName: string;

  constructor(private userService: UserService, private router: Router) {
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
  }

  setRole(role: NavbarRole) {
    this.role = role;
  }

  setUserName(fio: string) {
    if (this.role === NavbarRole.ADMIN) {
      this.userName = fio;
    } else if (this.role === NavbarRole.CUSTOMER) {
      // Михаил К.
      this.userName = fio;
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
