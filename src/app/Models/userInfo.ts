import {OrderInfo} from './orderInfo';

export class UserInfo {
  phone: string;
  name: string;
  surname: string;
  patronymic: string;
  password: string;
  orders: OrderInfo[];
}
