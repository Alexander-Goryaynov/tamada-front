import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {apiUrl} from '../../environments/environment';
import {Animator} from '../Models/animator';
import {AnimatorsSchedule} from '../Models/animatorsSchedule';
import {AppComponent} from '../app.component';
import {Observable} from 'rxjs';
import {AnimatorsView} from '../Models/animatorsView';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AnimatorService {

  private animatorsApiUrl = `${apiUrl}/animators/v1`;
  private schedulesApiUrl = `${this.animatorsApiUrl}/schedules`;

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  getAnimatorsWithPhotos(): Observable<AnimatorsView> {
    let token = this.cookieService.get('access');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http
      .get<AnimatorsView>(this.animatorsApiUrl, {headers: headers});
  }

  getAnimatorById(id: number): Animator {
    let result = new Animator();
    this.getAnimatorsWithPhotos()
      .subscribe(
        (animators: AnimatorsView) => {
        for (let i = 0; i < animators.animators.length; i++) {
          if (animators.animators[i].id === id) {
            result = animators.animators[i];
            break;
          }
        }
      }
    );
    return result;
  }

  getAnimatorsWithSchedules(): Observable<AnimatorsSchedule> {
    let token = this.cookieService.get('access');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get<AnimatorsSchedule>(this.schedulesApiUrl, {headers:headers});
  }

  updateAnimator(animator: Animator): void {
    return;
  }

  createAnimator(animator: Animator): void {
    return;
  }

  deleteAnimator(id: number): void {
    return;
  }
}
