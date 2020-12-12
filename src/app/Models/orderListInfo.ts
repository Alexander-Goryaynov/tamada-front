import {AnimatorInfo} from './animatorInfo';
import {OrderUserInfo} from './orderUserInfo';

export interface OrderListInfo {
  date: number;
  animator: AnimatorInfo;
  user: OrderUserInfo;
  event: string;
}
