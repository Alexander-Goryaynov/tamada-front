import {Component, OnInit} from '@angular/core';
import {UserService} from '../Services/user.service';
import {AnimatorService} from '../Services/animator.service';
import {OrderService} from '../Services/order.service';
import {NewOrder} from '../Models/newOrder';
import {AnimatorsSchedule} from '../Models/animatorsSchedule';
import {EventType} from '../Enums/eventType';
import swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  order: NewOrder = new NewOrder();
  schedule: AnimatorsSchedule;
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
      this.orderService.createOrder(this.order);
      this.displayAlert(
        'Заказ принят. Мы свяжемся с Вами в ближайшее время!',
        'success',
        true
      );
    } catch (e) {
      this.displayAlert(e, 'error', false);
    }
  }

  private validateInfo(): void {
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
    let animators = this.animatorService.getAnimatorsWithSchedules();
    this.schedule = animators;
  }

  private refreshPrice(): void {
    this.price = this.animatorService
      .getAnimatorById(this.order.animatorId).price.toString() + ' руб.';
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
    // pickedDate is in format 2020-12-25
    let pieces = this.pickedDate.split('-');
    pieces = pieces.reverse();
    // standardDate will be in format 25.12.2020
    let standardDate = pieces.join('.');
    let unavailableDates = this.schedule.animators[this.order.animatorId].dates;
    for (let i = 0; i < unavailableDates.length; i++) {
      if (standardDate.localeCompare(unavailableDates[i]) === 0) {
        this.wrongDateMessage = 'Выбранная дата уже занята';
        return;
      }
    }
    // convert to unix time format
    let orderDate = new Date(this.pickedDate);
    this.order.date = orderDate.getTime();
    // if date equals current date or less than current unix time
    if (standardDate.localeCompare(Date.now().toLocaleString()) === 0 ||
      this.order.date < Date.now()
    ) {
      this.wrongDateMessage = 'Дата должна быть позже текущей';
      return;
    }
    this.wrongDateMessage = '';
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
