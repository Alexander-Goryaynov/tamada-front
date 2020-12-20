import {OrderModel} from './DataModels/OrderModel';
import {EventType} from './Enums/EventType';
import {OrderStatus} from './Enums/OrderStatus';

export class OrderMocks {
  public static orders: OrderModel[] = [
    new OrderModel(
      0,
      1608758349000,
      1608239949000,
      EventType.BIRTHDAY,
      OrderStatus.PROCESSING,
      'ул. Пулл-реквестов, 34',
      0,
      '+79539823146'
    ),
    new OrderModel(
      1,
      1585689549000,
      1584479949000,
      EventType.JUBILEE,
      OrderStatus.FINISHED,
      'ул. Лежащего бэкенда, 42',
      2,
      '+79539823146'
    ),
    new OrderModel(
      2,
      1608758349000,
      1608239949000,
      EventType.BIRTHDAY,
      OrderStatus.CANCELLED,
      'ул. Сырных вопросов по правоведению, 50',
      0,
      '+79539823146'
    ),
  ];
}
