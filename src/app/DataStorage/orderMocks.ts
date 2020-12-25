import {OrderModel} from './DataModels/OrderModel';
import {EventType} from './Enums/EventType';
import {OrderStatus} from './Enums/OrderStatus';

export class OrderMocks {
  public static orders: OrderModel[] = [
    new OrderModel(
      0,
      1585506368000,
      1584987968000,
      EventType.BIRTHDAY,
      OrderStatus.FINISHED,
      'ул. Пулл-реквестов, 34',
      0,
      '+79539823146'
    ),
    new OrderModel(
      1,
      1589567168000,
      1588357568000,
      EventType.JUBILEE,
      OrderStatus.PROCESSING,
      'ул. Надёжного бэкенда, 42',
      2,
      '+79539823146'
    ),
    new OrderModel(
      2,
      1608758349000,
      1608239949000,
      EventType.WEDDING,
      OrderStatus.CANCELLED,
      'ул. КС-грамматики, 12',
      0,
      '+79876543210'
    ),
    new OrderModel(
      3,
      1599589568000,
      1600280768000,
      EventType.BIRTHDAY,
      OrderStatus.PROCESSING,
      'Нелинейное шоссе, 7',
      0,
      '+79539823146'
    )
  ];
}
