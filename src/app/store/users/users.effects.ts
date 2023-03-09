import { Injectable } from '@angular/core';
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects';
import {usersActions} from "./users.actions";
import {map, switchMap} from "rxjs";
import {ApiService} from "../../api/api.service";
import {User} from "../../models/user.model";
import {usersSelector} from "./users.selectors";
import {Store} from "@ngrx/store";
import {UserState} from "./users.reducers";



@Injectable()
export class UsersEffects {

  private readonly loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(usersActions.loadAllUsers.type),
    switchMap(() => this.apiService.getUsers().pipe(
      map((users: User[]) => usersActions.loadAllUsersSuccess({users}))
    ))
  ));

  private readonly addUser$ = createEffect(() => this.actions$.pipe(
    ofType(usersActions.addUser.type),
    concatLatestFrom(() => this.store.select(usersSelector)),
    map(([{user}, users]: [{user: User}, User[]]) => {
      const lastIndex = users[users.length - 1].id ?? 0;
      const newUser: User = {
        id: lastIndex + 1,
        company: user.company,
        email: user.email,
        name: user.name
      }
      return usersActions.addUserSuccess({user: newUser})
    })
  ));



  constructor(private actions$: Actions, private apiService: ApiService, private store: Store<UserState>) {}
}
