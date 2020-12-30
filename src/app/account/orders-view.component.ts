import {OrderListInfo} from '../Models/orderListInfo';
import {UserService} from '../Services/user.service';
import {OrderService} from '../Services/order.service';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {AnimatorService} from '../Services/animator.service';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AllOrdersModel} from '../Models/allOrdersModel';
import {apiUrl} from '../../environments/environment';
import {AnimatorsView} from '../Models/animatorsView';

@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.css']
})
export class OrdersViewComponent implements OnInit {

  orders: OrderListInfo[] = [];
  fio: string;
  phone: string;
  isAdmin: boolean;
  swalMessage: string = '';
  swalVisibility: boolean = false;

  constructor(
    private userService: UserService,
    private orderService: OrderService,
    private animatorService: AnimatorService,
    private cookieService: CookieService,
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loadOrders();
    this.loadFioLabel();
    this.isAdmin = this.userService.isAdmin();
  }

  private loadOrders(): void {
    let animators: AnimatorsView;
    this.animatorService.getAnimatorsWithPhotos().subscribe(
      anim => animators = anim
    );
    setTimeout(() => {
      if (this.userService.isAdmin()) {
        let token = this.cookieService.get('access');
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer ' + token);
        this.http
          .get<AllOrdersModel>(`${apiUrl}/orders/v1`, {headers: headers})
          .subscribe(
            item => {
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
                if (animators.animators.find(x => x.id === order.animator.id)) {
                  orderView.price = animators
                    .animators
                    .find(x => x.id === order.animator.id)
                    .price.toString() + ' Руб.';
                } else {
                  orderView.price = '-';
                }
                orderView.creationDate = order.date;
                this.orders.push(orderView);
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
              if (animators.animators.find(x => x.id === order.animator.id)) {
                orderView.price = animators
                  .animators
                  .find(x => x.id === order.animator.id)
                  .price.toString() + ' Руб.';
              } else {
                orderView.price = '-';
              }
              orderView.address = order.address;
              orderView.event = order.event;
              orderView.user = info.name;
              this.orders.push(orderView);
            }
          }
        );
      }
    }, 2000);
  }

  private loadFioLabel(): void {
    if (this.userService.isAdmin()) {
      this.fio = 'Администратор';
    } else {
      this.userService
        .getUserInfo()
        .subscribe(
          result => {
            this.phone = result.phone;
            this.fio = result.name;
          }
        );
    }
  }

  cancelOrder(id: number): void {
    this.orderService.cancelOrder(id).subscribe(
      result => {
        this.displayAlert(`Заказ №${id} успешно отменён`);
        this.loadOrders();
      },
      error => {
        console.log(error);
        this.displayAlert(error);
      }
    );
  }

  finishOrder(id: number): void {
    this.orderService.finishOrder(id).subscribe(
      result => {
        this.displayAlert(`Заказ №${id} успешно завершён`);
        this.loadOrders();
      }
    );
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
