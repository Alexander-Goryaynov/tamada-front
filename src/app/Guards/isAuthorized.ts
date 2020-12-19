import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {UserService} from '../Services/user.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsAuthorized implements CanActivate {

  constructor(private router: Router, private userService: UserService) {
    // todo
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return undefined;
  }
}
