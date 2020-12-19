import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';
import {AnimatorService} from '../../Services/animator.service';
import {Animator} from '../../Models/animator';
import {Role} from '../../Enums/role';

@Component({
  selector: 'app-animators-view',
  templateUrl: './animators-view.component.html',
  styleUrls: ['./animators-view.component.css']
})
export class AnimatorsViewComponent implements OnInit {

  private animators: Animator[];

  constructor(
    userService: UserService,
    animatorService: AnimatorService
  ) { }

  ngOnInit(): void {
  }

  loadAnimators(): void {
  }
}
