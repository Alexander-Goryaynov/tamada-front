import {EventType} from '../Enums/eventType';

export class NewOrder {
  date: number;
  animatorId: number;
  event: EventType;
  address: string;
}
