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
import {AnimatorService} from './animator.service';
import {Animator} from '../Models/animator';
import {AnimatorsView} from '../Models/animatorsView';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ordersApiUrl = `${apiUrl}/orders/v1`;

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private cookieService: CookieService,
    private animatorService: AnimatorService
  ) { }

  getOrdersList(): Observable<AllOrdersModel> {
    let result: OrderListInfo[] = [];
    let animators: AnimatorsView;
    let token = this.cookieService.get('access');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http
      .get<AllOrdersModel>(`${apiUrl}/orders/v1`, {headers: headers});
  }

  getUserOrdersCount(userPhone: string): number {
    let length: number;
    this.getOrdersList().subscribe(
      orders => length = orders.orders.length
    );
    return length;
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
