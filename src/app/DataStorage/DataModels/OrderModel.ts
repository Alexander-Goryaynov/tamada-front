import {EventType} from '../Enums/EventType';
import {OrderStatus} from '../Enums/OrderStatus';

export class OrderModel {

  constructor(
    public id: number,
    public date: number,
    public creationDate: number,
    public eventType: EventType,
    public status: OrderStatus,
    public address: string,
    public animatorId: number,
    public userPhone: string
  ) {
  }
}
