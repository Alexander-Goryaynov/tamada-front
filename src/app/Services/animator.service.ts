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
    return this.getAnimatorsWithPhotos()[id];
  }

  getAnimatorsWithSchedules(): Observable<AnimatorsSchedule> {
    let token = this.cookieService.get('access');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get<AnimatorsSchedule>(this.schedulesApiUrl, {headers:headers});
  }

  updateAnimator(animator: Animator): Observable<any> {
    animator.image = animator.image.split(',')[1];
    let token = this.cookieService.get('access');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.put(`${apiUrl}/animators/v1/${animator.id}`, animator, {headers: headers});
  }

  createAnimator(animator: Animator): Observable<any> {
    animator.image = animator.image.split(',')[1];
    let token = this.cookieService.get('access');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.post(`${apiUrl}/animators/v1`, animator, {headers: headers});
  }

  deleteAnimator(id: number): Observable<any> {
    let token = this.cookieService.get('access');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.delete(`${apiUrl}/animators/v1/${id}`, {headers: headers});
  }
}
