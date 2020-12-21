import { Component, OnInit } from '@angular/core';
import {AnimatorService} from '../../../Services/animator.service';
import {Animator} from '../../../Models/animator';

@Component({
  selector: 'app-create-update-animator',
  templateUrl: './create-update-animator.component.html',
  styleUrls: ['./create-update-animator.component.css']
})
export class CreateUpdateAnimatorComponent implements OnInit {

  private animatorId: number | null;
  private animator: Animator;

  constructor(private service: AnimatorService) { }

  ngOnInit(): void {
  }

  private onSubmit(): void {
  }

  private displayError(message: string): void {
  }

  private createAnimator(): void {
  }

  private updateAnimator(): void {
  }

}
