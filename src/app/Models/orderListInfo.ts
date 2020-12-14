import {AnimatorInfo} from './animatorInfo';
import {OrderUserInfo} from './orderUserInfo';

export class OrderListInfo {
  date: number;
  animator: AnimatorInfo;
  user: OrderUserInfo;
  event: string;
}