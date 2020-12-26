import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {UserService} from '../Services/user.service';
import {Observable} from 'rxjs';
import {adminPhone} from '../../environments/environment';

@Injectable()
export class IsAdmin implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (UserService.currentUser.localeCompare(adminPhone) === 0) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
