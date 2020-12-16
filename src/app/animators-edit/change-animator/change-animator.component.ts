import { Component, OnInit } from '@angular/core';
import {AnimatorService} from '../../Services/animator.service';
import {UserService} from '../../Services/user.service';
import {Animator} from '../../Models/animator';

@Component({
  selector: 'app-change-animator',
  templateUrl: './change-animator.component.html',
  styleUrls: ['./change-animator.component.css']
})
export class ChangeAnimatorComponent implements OnInit {

  private animator: Animator;

  constructor(
    private animatorService: AnimatorService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  loadData(): void {
    // todo
  }

  onSubmit(): void {
    // todo
  }

  displayAlert(message: string): void {
    // todo
  }

}
