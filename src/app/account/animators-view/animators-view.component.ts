import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';
import {AnimatorService} from '../../Services/animator.service';
import {Animator} from '../../Models/animator';
import {Role} from '../../Enums/role';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-animators-view',
  templateUrl: './animators-view.component.html',
  styleUrls: ['./animators-view.component.css']
})
export class AnimatorsViewComponent implements OnInit {

  animators: Animator[];
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
    this.animators = [];
    this
      .animatorService
      .getAnimatorsWithPhotos()
      .subscribe(
        result => {
          for (let i = 0; i < result.animators.length; i++) {
            this.animators.push(result.animators[i]);
          }
        }
      );
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
    this.animatorService.deleteAnimator(id).subscribe(
      result => {
        swal.fire(`Аниматор ${name} успешно удалён`);
        this.loadAnimators();
      }
    );
  }
}
