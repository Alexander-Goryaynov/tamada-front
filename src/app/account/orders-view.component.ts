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
  swalMessage: string = '';
  swalVisibility: boolean = false;

  constructor(
    private userService: UserService,
    private orderService: OrderService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loadOrders();
    this.loadFioLabel();
    this.isAdmin = this.userService.isAdmin();
  }

  private loadOrders(): void {
    this.orders = this.orderService.getOrdersList();
  }

  private loadFioLabel(): void {
    let currentUser = this.userService.getUserInfo();
    this.phone = currentUser.phone;
    this.fio = currentUser.name;
  }

  cancelOrder(id: number): void {
    this.orderService.cancelOrder(id);
    this.displayAlert(`Заказ №${id} успешно отменён`);
    this.loadOrders();
  }

  finishOrder(id: number): void {
    this.orderService.finishOrder(id);
    this.displayAlert(`Заказ №${id} успешно завершён`);
    this.loadOrders();
  }

  deleteOrder(id: number): void {
    this.orderService.deleteOrder(id);
    this.displayAlert(`Заказ №${id} успешно удалён`);
    this.loadOrders();
  }

  private displayAlert(message: string): void {
      this.swalMessage = message;
      this.swalVisibility = true;
      setTimeout(() => {
      this.swalVisibility = false;
    }, 2000);
  }
}
