import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/User';
import { LoadUserData } from 'src/app/store/actions/userdata.actions';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  userData$: Array<User> = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.select('userdata').subscribe((data: any) => {
      if (data) {
        this.userData$ = data.data;
        console.log(this.userData$);
      }
    });
  }

  getUserData(){
    this.store.dispatch(new LoadUserData('users'));
  }

}
