import {Component, OnInit} from '@angular/core';
import {AnimatorService} from '../../../Services/animator.service';
import {Animator} from '../../../Models/animator';
import {ActivatedRoute, Router} from '@angular/router';
import swal, {SweetAlertIcon} from 'sweetalert2';

@Component({
  selector: 'app-create-update-animator',
  templateUrl: './create-update-animator.component.html',
  styleUrls: ['./create-update-animator.component.css']
})
export class CreateUpdateAnimatorComponent implements OnInit {

  animator: Animator = new Animator();

  constructor(
    private service: AnimatorService,
    private router: Router,
    private route: ActivatedRoute,
    private animatorService: AnimatorService
  ) {
  }

  ngOnInit(): void {
    this.animator.id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (this.animator.id !== -1) {
      try {
        this.loadData();
      } catch (e) {
        this.animator.id = -1;
      }
    }
  }

  loadData(): void {
    Object.assign(this.animator, this.animatorService.getAnimatorById(this.animator.id));
  }

  onSubmit(): void {
    try {
      this.validateInput();
    } catch (e) {
      this.displayAlert(e, false);
      return;
    }
    if (this.animator.id === -1) {
      this.animatorService.createAnimator(this.animator);
      this.displayAlert('Создание аниматора прошло успешно', true);
    } else {
      this.animatorService.updateAnimator(this.animator);
      this.displayAlert('Аниматор успешно обновлён', true);
    }

  }

  private validateInput(): void {
    if (this.animator.image === undefined) {
      throw 'Необходимо добавить фото';
    }
    if (
      this.animator.name === undefined ||
      this.animator.description === undefined ||
      this.animator.motto === undefined ||
      this.animator.name === '' ||
      this.animator.description === '' ||
      this.animator.motto === '' ||
      this.animator.price === undefined ||
      this.animator.age === undefined
    ) {
      throw 'Заполните все поля';
    }
    if (this.animator.description.length > 250) {
      throw 'Длина описания не должна превышать 250 символов';
    }
    if (this.animator.motto.length > 250) {
      throw 'Длина девиза не должна превышать 250 символов';
    }
    if (this.animator.age < 14 || this.animator.age > 150) {
      throw 'Допустимый возраст аниматора от 14 до 150 лет включительно';
    }
    if (this.animator.price < 0 || this.animator.price > 50000) {
      throw 'Допустимая цена для аниматора от 0 до 50 000 рублей';
    }
  }

  private displayAlert(message: string, doRedirect: boolean): void {
    let swalIcon: SweetAlertIcon = (doRedirect) ? 'success' : 'error';
    swal.fire(message, '', swalIcon);
    if (doRedirect) {
      this.goBack();
    }
  }

  goBack(): void {
    setTimeout(() => {
      this.router.navigateByUrl('/animators-view');
    }, 1000);
  }

  onImageChange($event): void {
    let file: File = $event.target.files[0];
    let myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.animator.image = myReader.result as string;
    };
    myReader.readAsDataURL(file);
  }
}
