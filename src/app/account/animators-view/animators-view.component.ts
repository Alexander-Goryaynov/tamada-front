import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';
import {AnimatorService} from '../../Services/animator.service';
import {Animator} from '../../Models/animator';
import {Role} from '../../Enums/role';
import {AnimatorModel} from '../../DataStorage/DataModels/AnimatorModel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-animators-view',
  templateUrl: './animators-view.component.html',
  styleUrls: ['./animators-view.component.css']
})
export class AnimatorsViewComponent implements OnInit {

  animators: AnimatorModel[];
  animatorNameToDelete: string;
  private role: Role;
  private fio: string;

  constructor(
    private userService: UserService,
    private animatorService: AnimatorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAnimators();
  }

  loadAnimators(): void {
    this.animators =  this.animatorService.getAnimatorsWithPhotos();
  }

  editAnimator(id: number): void {
    setTimeout(() => {
      this.router.navigateByUrl('/create-update-animator/' + id);
    }, 250);
  }

  deleteAnimator(name: string): void {
    let id = this.animators
      .find(animator =>
        animator.name.localeCompare(name) === 0).id;
    console.log(id + name);
    this.animatorService.deleteAnimator(id);
    this.loadAnimators();
  }
}
