import {EventType} from '../DataStorage/Enums/EventType';

export class NewOrder {
  date: number;
  animatorId: number;
  event: EventType;
  address: string;
}
