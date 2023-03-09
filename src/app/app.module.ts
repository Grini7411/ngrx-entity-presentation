import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuxService} from "./aux.service";
import {HttpClientModule} from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {UsersModule} from "./features/users/users.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AddUserComponent} from "./features/add-user/add-user.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode(), name: 'ngrx-entity-session'}),
    UsersModule,
    BrowserAnimationsModule,
    AddUserComponent
  ],
  providers: [AuxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
