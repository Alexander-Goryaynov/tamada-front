import {Component, OnInit} from '@angular/core';
import {UserService} from '../Services/user.service';
import {AnimatorService} from '../Services/animator.service';
import {OrderService} from '../Services/order.service';
import {NewOrder} from '../Models/newOrder';
import {AnimatorsSchedule} from '../Models/animatorsSchedule';
import {EventType} from '../Enums/eventType';
import swal from 'sweetalert2';
import {Router} from '@angular/router';
import {AnimatorsView} from '../Models/animatorsView';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  order: NewOrder = new NewOrder();
  schedule: AnimatorsSchedule = new AnimatorsSchedule();
  eventsList: string[] = [];
  pickedDate: string = '';
  price: string = '';
  wrongDateMessage: string = '';
  swalMessage = '';
  swalIcon = 'error';
  swalVisibility = false;

  constructor(
    private userService: UserService,
    private animatorService: AnimatorService,
    private orderService: OrderService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.refreshEvents();
    this.refreshAnimators();
  }

  onSubmit(): void {
    try {
      this.validateInfo();
    } catch (e) {
      this.displayAlert(e, 'error', false);
      return;
    }
    this.validateInfo();
    this.orderService.createOrder(this.order).subscribe(
      response => {
        this.displayAlert(
          'Заказ принят. Мы свяжемся с Вами в ближайшее время!',
          'success',
          true
        );
      },
      error => {
        this.displayAlert(error, 'error', false);
      }
    );
  }

  private validateInfo(): void {
    console.log(this.order);
    if (
      this.order.event === undefined ||
      this.order.address === undefined ||
      this.order.animatorId === undefined ||
      this.order.date === undefined
    ) {
      throw 'Заполните все поля';
    }
    // cannot contain english letters
    if (this.order.address.match(/[A-Za-z]/)) {
      throw 'Адрес не должен содержать латинских символов';
    }
    if (this.order.address.length > 200) {
      throw 'Адрес не должен быть длиннее 200 символов';
    }
  }

  private refreshAnimators(): void {
    this.animatorService
      .getAnimatorsWithSchedules()
      .subscribe(animators => {
        console.log(animators);
        this.schedule = animators;
      });
  }

  private refreshPrice(): void {
    this.animatorService
      .getAnimatorsWithPhotos()
      .subscribe(
        (animators: AnimatorsView) => {
          for (let i = 0; i < animators.animators.length; i++) {
            if (animators.animators[i].id === this.order.animatorId) {
              this.price = animators.animators[i].price.toString();
              break;
            }
          }
        }
      );
  }

  private refreshEvents(): void {
    this.eventsList = [];
    for (let i = 0; i < Object.values(EventType).length; i++) {
      this.eventsList.push(Object.values(EventType)[i]);
    }
  }

  onEventSelect($event: any): void {
    switch ($event.target.value.toString()) {
      case 'Cвадьба':
        this.order.event = EventType.WEDDING;
        break;
      case 'День рождения':
        this.order.event = EventType.BIRTHDAY;
        break;
      case 'Выпускной':
        this.order.event = EventType.PROM;
        break;
      case 'Юбилей':
        this.order.event = EventType.JUBILEE;
        break;
    }
  }

  onAnimatorSelect($event: any): void {
    this.order.animatorId = parseInt($event.target.value);
    this.refreshPrice();
  }

  onDatePick(): void {
    // convert to unix time format
    let orderDate = new Date(this.pickedDate);
    let availableDates = this.schedule.animators
      .find(x => x.id === this.order.animatorId).dates;
    let anyDate: boolean = false;
    for (let i = 0; i < availableDates.length; i++) {
      console.log('LEFT' + orderDate.getTime());
      console.log('RIGHT' + (new Date(availableDates[i])).getTime());
      if (orderDate.getTime() === (new Date(availableDates[i])).getTime()) {
        anyDate = true;
        this.order.date = orderDate.getTime();
        break;
      }
    }
    if (!anyDate) {
      this.wrongDateMessage = 'Выбранная дата недоступна';
    } else {
      this.wrongDateMessage = '';
    }
  }

  displayAlert(message: string, icon: string, doRedirect: boolean): void {
    this.swalMessage = message;
    this.swalIcon = icon;
    this.swalVisibility = true;
    if (doRedirect) {
      setTimeout(() => {
        this.router.navigateByUrl('/orders-view');
      }, 4000);
    } else {
      setTimeout(() => {
        this.swalVisibility = false;
      }, 1000);
    }
  }
}
