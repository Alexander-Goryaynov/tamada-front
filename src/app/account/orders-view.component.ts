import {Component, OnInit} from '@angular/core';
import {OrderListInfo} from '../Models/orderListInfo';
import {UserService} from '../Services/user.service';
import {OrderService} from '../Services/order.service';

@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.css']
})
export class OrdersViewComponent implements OnInit {

  orders: OrderListInfo[];
  fio: string;
  phone: string;

  constructor(
    private userService: UserService,
    private orderService: OrderService
  ) {
  }

  ngOnInit(): void {
    this.loadOrders();
    this.loadFioLabel();
  }

  private loadOrders(): void {
    this.orders = this.orderService.getOrdersList();
    console.log(this.orders);
  }

  private loadFioLabel(): void {
    let currentUser = this.userService.getUserInfo();
    this.phone = currentUser.phone;
    this.fio = currentUser.name;
  }

  private hasEditPermissions(): boolean {
    // todo
    return false;
  }

  private editOrder(id: number): void {

  }

  private deleteOrder(id: number): void {

  }
}
