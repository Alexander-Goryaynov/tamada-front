import {Injectable} from '@angular/core';
import {apiUrl} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderListInfo} from '../Models/orderListInfo';
import {NewOrder} from '../Models/newOrder';
import {UserService} from './user.service';
import {AppComponent} from '../app.component';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ordersApiUrl = `${apiUrl}/orders/v1`;

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private cookieService: CookieService
  ) { }

  getOrdersList(): OrderListInfo[] {
    let result: OrderListInfo[] = [];
    if (this.userService.isAdmin()) {
      // todo
    } else {
      this.userService.getUserInfo().subscribe(
        info => {
          for (let i = 0; i < info.orders.length; i++) {
            let orderView = new OrderListInfo();
            let order = info.orders[i];
            orderView.id = order.id;
            orderView.creationDate = order.createdAt;
            orderView.date = order.date;
            orderView.status = order.status;
            orderView.animatorName = order.animator.name;
            orderView.price = '0';
            orderView.address = order.address;
            orderView.event = order.event;
            orderView.user = info.name;
            result.push(orderView);
          }
        }
      );
    }
    return result;
  }

  getUserOrdersCount(userPhone: string): number {
    return 0;
  }

  createOrder(newOrder: NewOrder): Observable<any> {
    let token = this.cookieService.get('access');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    switch (newOrder.event) {
      case 'Cвадьба':
        newOrder.event = 'WEDDING';
        break;
      case 'День рождения':
        newOrder.event = 'BIRTHDAY';
        break;
      case 'Выпускной':
        newOrder.event = 'PROM';
        break;
      case 'Юбилей':
        newOrder.event = 'JUBILEE';
        break;
    }
    return this.http.post<NewOrder>(this.ordersApiUrl, newOrder, {headers: headers});
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
