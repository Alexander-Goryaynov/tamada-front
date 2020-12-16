import { Component, OnInit } from '@angular/core';
import {UserService} from '../Services/user.service';
import {AnimatorService} from '../Services/animator.service';
import {OrderService} from '../Services/order.service';
import {NewOrder} from '../Models/newOrder';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  private order: NewOrder;

  constructor(
    private userService: UserService,
    private animatorService: AnimatorService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
  }

  private onSubmit(): void {
    // todo
  }

  private validateInfo(): boolean {
    // todo
    return false;
  }

  private refreshAnimators(): void {
    // todo
  }

  private refreshPrice(): void {
    // todo
  }

  private displayAlert(message: string): void {
    // todo
  }
}
