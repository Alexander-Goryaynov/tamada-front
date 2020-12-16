import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../Models/userInfo';
import {UserService} from '../Services/user.service';

@Component({
  selector: 'app-accounts-view',
  templateUrl: './accounts-view.component.html',
  styleUrls: ['./accounts-view.component.css']
})
export class AccountsViewComponent implements OnInit {

  private accounts: UserInfo[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  private loadData(): void {
    // todo
  }

  deleteAccount(id: number): void {
    // todo
  }

  displayError(message: string): void {
    // todo
  }
}
