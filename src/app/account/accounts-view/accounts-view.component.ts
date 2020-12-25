import {Component, OnInit} from '@angular/core';
import {UserInfo} from '../../Models/userInfo';
import {UserService} from '../../Services/user.service';
import {AccountViewModel} from '../../Models/accountViewModel';
import {OrderService} from '../../Services/order.service';
import {adminPhone} from '../../../environments/environment';
import swal from 'sweetalert2';

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
    private orderService: OrderService
  ) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.accounts = [];
    let users = this.userService.getUsersList();
    users.forEach((user, i, users) => {
      if (user.phone.localeCompare(adminPhone) !== 0) {
        this.accounts.push(new AccountViewModel(
          user.phone,
          user.name,
          this.orderService.getUserOrdersCount(user.phone)
          )
        );
      }
    });
    // sort ascending
    this.accounts.sort(
      (x, y) => {
        return x.ordersCount - y.ordersCount;
      }
    );
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
