
import * as UserdataActions from '../actions/userdata.actions';
import { UserDataState } from 'src/app/stateModels/UserdataState';

export const initialState: UserDataState = {
  data: [ ],
  loaded: false,
  loading: false,
};


export function UserDataReducer(state: UserDataState = initialState, action: UserdataActions.UserdataAction ): UserDataState {
  switch (action.type) {
    case UserdataActions.LOAD_USERDATA: {
      return {
        ...state,
        loading: true
      };
    }

    case UserdataActions.LOAD_USERDATA_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }

    case UserdataActions.LOAD_USERDATA_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

  }
  return state;
}
