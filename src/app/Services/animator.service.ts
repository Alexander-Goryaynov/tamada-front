import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {apiUrl} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Animator} from '../Models/animator';
import {AnimatorSchedule} from '../Models/animatorSchedule';
import {AnimatorModel} from '../DataStorage/DataModels/AnimatorModel';
import {AppComponent} from '../app.component';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AnimatorService {

  private animatorsApiUrl = `${apiUrl}animators/v1`;
  private schedulesApiUrl = `${this.animatorsApiUrl}/schedules`;

  constructor(private http: HttpClient, private cookieService: CookieService) {
    // todo
  }

  getAnimatorsWithPhotos(): Observable<Animator> {
    let token = this.cookieService.get('accessToken');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get<Animator>(this.animatorsApiUrl, {headers: headers});
  }

  getAnimatorsWithSchedules(): void {
    let token = this.cookieService.get('accessToken');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    this.http.get<Animator>(this.schedulesApiUrl, {headers: headers})
      .subscribe(result => {console.log(result)});
  }

  updateAnimator(animator: Animator): Observable<any>{
    // todo
    return new Observable<any>();
  }

  createAnimator(animator: Animator): Observable<any> {
    // todo
    return new Observable<any>();
  }

  deleteAnimator(id: number): void {
    AppComponent.database.deleteAnimator(id);
  }
}
