import {isDevMode, NgModule} from "@angular/core";
import {AuxService} from "../../aux.service";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {UserComponent} from "./components/user/user.component";
import {CommonModule} from "@angular/common";
import {userFeatureKey, usersReducers} from "../../store/users/users.reducers";
import {BrowserModule} from "@angular/platform-browser";
import {UsersComponent} from "./users.component";
import {UsersEffects} from "../../store/users/users.effects";


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    UserComponent,
    StoreModule.forFeature(userFeatureKey, usersReducers),
    EffectsModule.forFeature([UsersEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode(), name: 'ngrx-entity-session'})
  ],
  providers: [AuxService],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
