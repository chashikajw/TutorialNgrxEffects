import { User } from '../models/User';

export interface UserDataState {
  data: User[];
  loaded: boolean;
  loading: boolean;
}
