import {Injectable} from '@angular/core';
import {apiUrl} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderListInfo} from '../Models/orderListInfo';
import {NewOrder} from '../Models/newOrder';
import {UserService} from './user.service';
import {AppComponent} from '../app.component';
import {CookieService} from 'ngx-cookie-service';
import {AllOrdersModel} from '../Models/allOrdersModel';

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
      let token = this.cookieService.get('access');
      let headers = new HttpHeaders();
      headers = headers.set('Authorization', 'Bearer ' + token);
      this.http
        .get<AllOrdersModel>(`${apiUrl}/orders/v1`, {headers: headers})
        .subscribe(
          item => {
            console.log(item);
            for (let i = 0; i < item.orders.length; i++) {
              let orderView = new OrderListInfo();
              let order = item.orders[i];
              orderView.id = order.id;
              orderView.event = order.event;
              orderView.date = order.date;
              orderView.user = order.user.name;
              orderView.address = order.address;
              orderView.animatorName = order.animator.name;
              orderView.status = order.status;
              orderView.price = 'ОТСУТСТВУЕТ В МОДЕЛИ!';
              orderView.creationDate = order.date;
              result.push(orderView);
            }
          }
        );
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
            orderView.price = 'ОТСУТСТВУЕТ В МОДЕЛИ!';
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
    return this.getOrdersList().length;
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

  cancelOrder(orderId: number): Observable<any> {
    let token = this.cookieService.get('access');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.post(`${this.ordersApiUrl}/${orderId}/cancel`, {}, {headers: headers});
  }

  finishOrder(orderId: number): Observable<any> {
    let token = this.cookieService.get('access');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.post(`${this.ordersApiUrl}/${orderId}/approve`, {}, {headers: headers});
  }

  deleteOrder(orderId: number): Observable<any> {
    let token = this.cookieService.get('access');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.delete(`${apiUrl}/orders/${orderId}/delete`, {headers: headers});
  }
}
