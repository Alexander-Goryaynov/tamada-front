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
    let orders = AppComponent.database.getUserOrders(UserService.currentUser);
    let result: OrderListInfo[] = [];
    for (let i = 0; i < orders.length; i++) {
      let orderViewModel = new OrderListInfo();
      let order = orders[i];
      orderViewModel.address = order.address;
      orderViewModel.date = (new Date(order.date)).toLocaleDateString();
      orderViewModel.creationDate = (new Date(order.creationDate)).toLocaleDateString();
      orderViewModel.event = order.eventType.toString();
      orderViewModel.id = order.id;
      orderViewModel.user = AppComponent.database.getUser(order.userPhone).name;
      let animator = AppComponent.database.getAnimator(order.animatorId);
      orderViewModel.animatorName = animator.name;
      orderViewModel.price = `${animator.price} Руб.`;
      result.push(orderViewModel);
    }
    return result;
  }

  createOrder(newOrder: NewOrder): Observable<any> {
    // todo
    return new Observable<any>();
  }

  cancelOrder(orderId: number): Observable<any> {
    // todo
    return new Observable<any>();
  }
}
