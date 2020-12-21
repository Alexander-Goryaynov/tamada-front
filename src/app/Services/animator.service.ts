import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Animator} from '../Models/animator';
import {AnimatorSchedule} from '../Models/animatorSchedule';
import {AnimatorModel} from '../DataStorage/DataModels/AnimatorModel';

@Injectable({
  providedIn: 'root'
})
export class AnimatorService {

  private animatorsApiUrl: string;
  private schedulesApiUrl: string;

  constructor(private http: HttpClient) {
  }

  getAnimatorsWithPhotos(): AnimatorModel[] {
    return [];
  }

  getAnimatorsWithSchedules(): AnimatorSchedule[] {
    return [];
  }

  updateAnimator(animator: Animator): void {
  }

  createAnimator(animator: Animator): void {
  }
}
