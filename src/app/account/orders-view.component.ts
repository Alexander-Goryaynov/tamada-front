import { Component, OnInit } from '@angular/core';
import {OrderListInfo} from '../Models/orderListInfo';

@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.css']
})
export class OrdersViewComponent implements OnInit {

  private orders: OrderListInfo[];
  private fio: string;

  constructor() { }

  ngOnInit(): void {
  }

  private loadOrders(): void {
    // TODO
  }

  private loadFioLabel(): void {
    // TODO
  }

  private hasEditPermissions(): boolean {
    // todo
    return false;
  }

  private editOrder(id: number): void {

  }

  private deleteOrder(id: number): void {

  }
}