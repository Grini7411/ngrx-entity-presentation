import { Injectable } from '@angular/core';
import {Actions, concatLatestFrom, createEffect, ofType, } from '@ngrx/effects';
import {usersActions} from "./user.actions";
import {map, switchMap} from "rxjs";
import {ApiService} from "../../api/api.service";
import {User} from "../../models/user.model";
import {Store} from "@ngrx/store";
import {userIdsSelector} from "./users.selectors";


@Injectable()
export class UserEffects {

  private readonly loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(usersActions.loadAllUsers.type),
    switchMap(() => this.apiService.getUsers().pipe(
      map((users: User[]) => usersActions.loadAllUsersSuccess({users}))
    ))
  ));

  private readonly addUser$ = createEffect(() => this.actions$.pipe(
    ofType(usersActions.addUser.type),
    concatLatestFrom(() => this.store.select(userIdsSelector)),
    map(([{user}, ids]: [{ user: User }, number[]]) => {
      const lastIndex = ids[ids.length - 1] ?? 0;
      const newUser: User = {
        id: lastIndex + 1,
        company: user.company,
        email: user.email,
        name: user.name
      }
      return usersActions.addUserSuccess({user: newUser})
    })
  ));

  constructor(private actions$: Actions, private apiService: ApiService, private store: Store) {}
}
