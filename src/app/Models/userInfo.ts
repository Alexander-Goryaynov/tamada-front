import {OrderInfo} from './orderInfo';

export interface UserInfo {
  phone: string;
  name: string;
  surname: string;
  patronymic: string;
  password: string;
  orders: OrderInfo[];
}
