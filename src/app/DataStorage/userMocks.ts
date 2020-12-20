import {UserModel} from './DataModels/UserModel';

export class UserMocks {
  public static users: UserModel[] = [
    new UserModel('+01234567890', 'Администратор', 'admin123!'),
    new UserModel('+79539823146', 'Горяйнов Александр Викторвич', 'alex1234!')
  ]
}
