import {AnimatorModel} from './DataModels/AnimatorModel';
import {OrderModel} from './DataModels/OrderModel';
import {UserModel} from './DataModels/UserModel';
import {UserInfo} from '../Models/userInfo';
import {NewOrder} from '../Models/newOrder';
import {EventType} from './Enums/EventType';
import {OrderStatus} from './Enums/OrderStatus';
import {AnimatorMocks} from './animatorMocks';
import {UserMocks} from './userMocks';
import {OrderMocks} from './orderMocks';

export class Database {
  private animators: AnimatorModel[] = [];
  private orders: OrderModel[] = [];
  private users: UserModel[] = [];
  private static instance: Database;

  private constructor() {
    this.animators = AnimatorMocks.animators;
    this.users = UserMocks.users;
    this.orders = OrderMocks.orders;
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  // USER

  getAllUsers(): UserModel[] {
    return this.users;
  }

  getUser(phone: string): UserModel {
    return this.users.find(user => user.phone.localeCompare(phone) === 0);
  }

  createUser(newUser: UserInfo): void {
    let user = new UserModel(newUser.phone, newUser.name, newUser.password);
    if (this.users
      .find(user => user.phone.localeCompare(newUser.phone) === 0) !== undefined) {
      throw 'Уже существует пользователь с таким номером телефона';
    }
    this.users.push(user);
  }

  updateUser(newUser: UserInfo): void {
    this.users.forEach(function(user, i, users) {
      if (user.phone.localeCompare(newUser.phone) === 0) {
        user.password = newUser.password;
        user.name = newUser.name;
      }
    })
  }

  deleteUser(phone: string): void {
    this.users = this.users.filter(user => user.phone.localeCompare(phone) !== 0);
  }

  // ORDER

  getUserOrders(userPhone: string): OrderModel[] {
    return this.orders
      .filter(order =>
        order.userPhone.localeCompare(userPhone) === 0);
  }

  getAllOrders(): OrderModel[] {
    return this.orders;
  }

  createOrder(newOrder: NewOrder, userPhone: string): void {
    let newId = 0;
    for (let i = 0; i < this.orders.length; i++) {
      let curOrd = this.orders[i];
      if (curOrd.id >= newId) {
        newId = curOrd.id + 1;
      }
    }
    let order = new OrderModel(
      newId,
      newOrder.date,
      Date.now(),
      EventType[newOrder.event],
      OrderStatus.PROCESSING,
      newOrder.address,
      newOrder.animatorId,
      userPhone
    );
  }

  finishOrder(id: number) {
    this.orders.forEach(function(order, i, orders) {
      if (order.id === id && order.status === OrderStatus.PROCESSING) {
        order.status = OrderStatus.FINISHED;
      }
    })
  }

  cancelOrder(id: number) {
    this.orders.forEach(function(order, i, orders) {
      if (order.id === id && order.status === OrderStatus.PROCESSING) {
        order.status = OrderStatus.CANCELLED;
      }
    })
  }

  deleteOrder(id: number): void {
    this.orders = this.orders.filter(user => user.id !== id);
  }

  // ANIMATOR

  getAllAnimators(): AnimatorModel[] {
    return this.animators;
  }

  getAnimator(id: number): AnimatorModel {
    return this.animators.find(ani => ani.id === id);
  }

  createAnimator(newAnimator: AnimatorModel): void {
    let newId = 0;
    for (let i = 0; i < this.animators.length; i++) {
      let curAnim = this.animators[i];
      if (curAnim.id >= newId) {
        newId = curAnim.id + 1;
      }
    }
    newAnimator.id = newId;
    this.animators.push(newAnimator);
  }

  updateAnimator(newAnimator: AnimatorModel): void {
    this.animators.forEach(function(anim, i, anims) {
      if (anim.id === newAnimator.id) {
        anim.name = newAnimator.name;
        anim.price = newAnimator.price;
        anim.age = newAnimator.age;
        anim.description = newAnimator.description;
        anim.motto = newAnimator.motto;
        anim.image = newAnimator.image;
      }
    })
  }

  deleteAnimator(id: number): void {
    this.animators = this.animators.filter(ani => ani.id !== id);
  }
}
