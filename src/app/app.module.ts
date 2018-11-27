import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { StoreModule } from '@ngrx/store';
import { UserDataReducer } from './store/reducers/userdata.reducers';
import { UserDataEffects } from './store/effects/userdata.effects';
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      userdata: UserDataReducer
    }),
    EffectsModule.forRoot([
     UserDataEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
