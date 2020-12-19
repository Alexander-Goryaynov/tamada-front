import { Component, OnInit } from '@angular/core';
import {AnimatorService} from '../../../Services/animator.service';
import {Animator} from '../../../Models/animator';

@Component({
  selector: 'app-create-update-animator',
  templateUrl: './create-update-animator.component.html',
  styleUrls: ['./create-update-animator.component.css']
})
export class CreateUpdateAnimatorComponent implements OnInit {

  private animator: Animator;

  constructor(private service: AnimatorService) {
    // todo
  }

  ngOnInit(): void {
    // todo
  }

  private onSubmit(): void {
    // todo
  }

  private displayError(message: string): void {
    // todo
  }

  private validate(): boolean {
    // todo
    return false;
  }

}
