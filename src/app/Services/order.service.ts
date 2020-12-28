import {Injectable} from '@angular/core';
import {apiUrl} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderListInfo} from '../Models/orderListInfo';
import {NewOrder} from '../Models/newOrder';
import {UserService} from './user.service';
import {AppComponent} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ordersApiUrl = `${apiUrl}/orders/v1`;

  constructor(private http: HttpClient,
              private userService: UserService
  ) {
    // todo
  }

  getOrdersList(): OrderListInfo[] {
    let result: OrderListInfo[] = [];
    return result;
  }

  getUserOrdersCount(userPhone: string): number {
    return 0;
  }

  createOrder(newOrder: NewOrder): void {
    return;
  }

  cancelOrder(orderId: number): void {
    return;
  }

  finishOrder(orderId: number): void {
    return;
  }

  deleteOrder(orderId: number): void {
    return;
  }
}
