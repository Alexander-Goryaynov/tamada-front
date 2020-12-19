import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiUrl} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Animator} from '../Models/animator';
import {AnimatorSchedule} from '../Models/animatorSchedule';

@Injectable({
  providedIn: 'root'
})
export class AnimatorService {

  private animatorsApiUrl: string;
  private schedulesApiUrl: string;

  constructor(private http: HttpClient) {
    // todo
  }

  getAnimatorsWithPhotos(page: number): Observable<Animator> {
    // todo
    return new Observable<Animator>();
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
}
