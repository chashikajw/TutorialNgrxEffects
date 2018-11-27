
import {Action} from '@ngrx/store';
import { User } from 'src/app/models/User';

export const LOAD_USERDATA = '[USERDATA] Load USERDATA';
export const LOAD_USERDATA_FAIL = '[USERDATA] Load USERDATA Fail';
export const LOAD_USERDATA_SUCCESS = '[USERDATA] Load USERDATA Success';


export class LoadUserData implements Action {
  readonly type = LOAD_USERDATA;
  constructor(public payload: string) {}
}


export class LoadUserDataFail implements Action {
  readonly type = LOAD_USERDATA_FAIL;
  constructor(public payload: any) {}
}

export class LoadUserDataSuccess implements Action {
  readonly type = LOAD_USERDATA_SUCCESS;
  constructor(public payload: User[]) {}
}

export type UserdataAction = LoadUserData | LoadUserDataFail | LoadUserDataSuccess ;
