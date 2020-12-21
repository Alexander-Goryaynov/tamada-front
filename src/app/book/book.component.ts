import { Component, OnInit } from '@angular/core';
import {UserService} from '../Services/user.service';
import {AnimatorService} from '../Services/animator.service';
import {OrderService} from '../Services/order.service';
import {NewOrder} from '../Models/newOrder';
import {AnimatorInfo} from '../Models/animatorInfo';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  private order: NewOrder;
  private animators: AnimatorInfo[];
  private price: string;


  constructor(
    private userService: UserService,
    private animatorService: AnimatorService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
  }

  private onSubmit(): void {
  }

  private validateInfo(): boolean {
    return false;
  }

  private refreshAnimators(): void {
  }

  private refreshPrice(): void {
  }

  private displayAlert(message: string): void {
  }
}
