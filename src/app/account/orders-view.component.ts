import {OrderListInfo} from '../Models/orderListInfo';
import {UserService} from '../Services/user.service';
import {OrderService} from '../Services/order.service';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.css']
})
export class OrdersViewComponent implements OnInit {

  orders: OrderListInfo[];
  fio: string;
  phone: string;
  isAdmin: boolean;

  constructor(
    private userService: UserService,
    private orderService: OrderService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  private loadOrders(): void {
  }

  private loadFioLabel(): void {
  }

  cancelOrder(id: number): void {
  }

  finishOrder(id: number): void {
  }

  deleteOrder(id: number): void {
  }

  private displayAlert(message: string): void {
  }
}
