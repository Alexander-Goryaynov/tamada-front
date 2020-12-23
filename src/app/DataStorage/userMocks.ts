import {UserModel} from './DataModels/UserModel';
import {adminPhone, adminPassword} from '../../environments/environment';

export class UserMocks {
  public static users: UserModel[] = [
    new UserModel(adminPhone, 'Администратор', adminPassword),
    new UserModel('+79539823146', 'Горяйнов Александр Викторович', 'alex1234!'),
    new UserModel('+79876543210', 'Галкин Максим Александрович', 'alex1234!')
  ]
}
