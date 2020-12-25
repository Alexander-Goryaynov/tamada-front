import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiUrl} from '../../environments/environment';
import {Animator} from '../Models/animator';
import {AnimatorsSchedule} from '../Models/animatorsSchedule';
import {AnimatorModel} from '../DataStorage/DataModels/AnimatorModel';
import {AppComponent} from '../app.component';
import {OrderStatus} from '../DataStorage/Enums/OrderStatus';

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

  getAnimatorsWithSchedules(): AnimatorsSchedule {
    let result = new AnimatorsSchedule();
    result.animators = [];
    let ordersList = AppComponent.database.getAllOrders();
    let animatorsList = AppComponent.database.getAllAnimators();
    for (let i = 0; i < animatorsList.length; i++) {
      let animator = animatorsList[i];
      let dates = [];
      for (let j = 0; j < ordersList.length; j++) {
        let order = ordersList[j];
        if (
          order.animatorId === animator.id &&
          order.status === OrderStatus.PROCESSING
        ) {
          dates.push(new Date(order.date).toLocaleDateString());
        }
      }
      result.animators.push({id: animator.id, name: animator.name, dates: dates});
    }
    return result;
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
