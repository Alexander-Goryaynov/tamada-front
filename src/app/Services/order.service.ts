import {Injectable} from '@angular/core';
import {apiUrl} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderListInfo} from '../Models/orderListInfo';
import {NewOrder} from '../Models/newOrder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ordersApiUrl: string;

  constructor(private http: HttpClient) {
    // todo
  }

  getOrdersList(): Observable<OrderListInfo[]> {
    // todo
    return new Observable<OrderListInfo[]>();
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
