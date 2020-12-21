import {Injectable} from '@angular/core';
import {apiUrl} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderListInfo} from '../Models/orderListInfo';
import {NewOrder} from '../Models/newOrder';
import {UserService} from './user.service';
import {AppComponent} from '../app.component';
import {OrderModel} from '../DataStorage/DataModels/OrderModel';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ordersApiUrl: string;

  constructor(private http: HttpClient,
              private userService: UserService
              ) {
  }

  getOrdersList(): OrderListInfo[] {
    return [];
  }

  createOrder(newOrder: NewOrder): void {
  }

  cancelOrder(orderId: number): void {
  }

  finishOrder(orderId: number): void {
  }

  deleteOrder(orderId: number): void {
  }
}
