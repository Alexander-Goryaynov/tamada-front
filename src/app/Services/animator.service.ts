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
  }

  getAnimatorsWithPhotos(): AnimatorModel[] {
    return AppComponent.database.getAllAnimators();
  }

  getAnimatorById(id: number): Animator {
    let animator = AppComponent.database.getAnimator(id);
    if (animator === undefined) {
      throw 'Аниматор не найден';
    }
    return animator;
  }

  getAnimatorsWithSchedules(): Observable<AnimatorSchedule> {
    // todo
    return new Observable<AnimatorSchedule>();
  }

  updateAnimator(animator: Animator): void {
    AppComponent.database.updateAnimator(
      new AnimatorModel(
        animator.id,
        animator.name,
        animator.age,
        animator.description,
        animator.motto,
        animator.price,
        animator.image
      )
    );
  }

  createAnimator(animator: Animator): void {
    AppComponent.database.createAnimator(
      new AnimatorModel(
        0,
        animator.name,
        animator.age,
        animator.description,
        animator.motto,
        animator.price,
        animator.image
      )
    );
  }

  deleteAnimator(id: number): void {
    AppComponent.database.deleteAnimator(id);
  }
}
