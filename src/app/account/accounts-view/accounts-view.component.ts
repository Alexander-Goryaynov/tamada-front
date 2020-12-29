import {Component, OnInit} from '@angular/core';
import {UserInfo} from '../../Models/userInfo';
import {UserService} from '../../Services/user.service';
import {AccountViewModel} from '../../Models/accountViewModel';
import {OrderService} from '../../Services/order.service';
import {adminPhone, apiUrl} from '../../../environments/environment';
import swal from 'sweetalert2';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {AllOrdersModel} from '../../Models/allOrdersModel';

@Component({
  selector: 'app-accounts-view',
  templateUrl: './accounts-view.component.html',
  styleUrls: ['./accounts-view.component.css']
})
export class AccountsViewComponent implements OnInit {

  accounts: AccountViewModel[];
  accountToDelete: string;

  constructor(
    private userService: UserService,
    private orderService: OrderService,
    private http: HttpClient,
    private cookieService: CookieService
  ) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.accounts = [];
    let token = this.cookieService.get('access');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    this.http.get<AllOrdersModel>(`${apiUrl}/orders/v1`, {headers: headers})
      .subscribe(
        result => {
          for (let i = 0; i < result.orders.length; i++) {
            let order = result.orders[i];
            let searchRes = this.accounts.find(x => x.phone.localeCompare(order.user.phone) === 0);
            if (searchRes === undefined) {
              this.accounts.push(new AccountViewModel(order.user.phone, order.user.name, 1));
            } else {
              searchRes.ordersCount++;
            }
          }
          // sort ascending
          this.accounts.sort(
            (x, y) => {
              return x.ordersCount - y.ordersCount;
            }
          );
        }
      )
  }

  deleteAccount(phone: string): void {
    let deletedName = this.userService.getUsersList().find(user => user.phone.localeCompare(phone) === 0).name;
    this.userService.deleteUser(phone);
    this.displayAlert(`Пользователь ${deletedName} успешно удалён`);
    this.loadData();
  }

  displayAlert(message: string): void {
    swal.fire(message);
  }
}
