import { Component, OnInit } from '@angular/core';
import {AnimatorService} from '../../Services/animator.service';
import {Animator} from '../../Models/animator';

@Component({
  selector: 'app-create-animator',
  templateUrl: './create-animator.component.html',
  styleUrls: ['./create-animator.component.css']
})
export class CreateAnimatorComponent implements OnInit {

  private animator: Animator;

  constructor(private service: AnimatorService) { }

  ngOnInit(): void {
  }

  private onSubmit(): void {
    // todo
  }

  private displayError(message: string): void {
    // todo
  }

}
