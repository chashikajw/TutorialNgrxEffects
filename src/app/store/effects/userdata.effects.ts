import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as userdataActions from '../actions/userdata.actions';

@Injectable()
export class UserDataEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  loadUserdata$ = this.actions$
    .ofType(userdataActions.LOAD_USERDATA)
    .pipe(switchMap((action: userdataActions.LoadUserData) => {
      console.log('++hit reducer');
      return this.http.get<any>('https://jsonplaceholder.typicode.com/' + action.payload).pipe(
        map(data => {
          if (data) {
            return new userdataActions.LoadUserDataSuccess(
              data);
          } else {
            return new userdataActions.LoadUserDataFail('data is not loading');
          }
        }),
        catchError(error => of(new userdataActions.LoadUserDataFail(error)))
      );
    })
    );

}
