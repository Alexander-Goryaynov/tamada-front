import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiUrl} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Animator} from '../Models/animator';
import {AnimatorSchedule} from '../Models/animatorSchedule';
import {AnimatorModel} from '../DataStorage/DataModels/AnimatorModel';
import {AppComponent} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AnimatorService {

  private animatorsApiUrl = `${apiUrl}/animators/v1`;
  private schedulesApiUrl = `${this.animatorsApiUrl}/schedules`;

  constructor(private http: HttpClient) {
    // todo
  }

  getAnimatorsWithPhotos(): AnimatorModel[] {
    return AppComponent.database.getAllAnimators();
  }

  getAnimatorsWithSchedules(): Observable<AnimatorSchedule> {
    // todo
    return new Observable<AnimatorSchedule>();
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
