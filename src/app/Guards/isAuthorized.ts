import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {UserService} from '../Services/user.service';
import {Observable} from 'rxjs';

@Injectable()
export class IsAuthorized implements CanActivate {

  constructor(private router: Router, private userService: UserService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (UserService.currentUser.localeCompare('') !== 0) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
