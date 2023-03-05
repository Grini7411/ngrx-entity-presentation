import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {usersActions} from "./user.actions";
import {map, switchMap} from "rxjs";
import {ApiService} from "../../api/api.service";
import {User} from "../../models/user.model";



@Injectable()
export class UserEffects {

  private readonly loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(usersActions.loadAllUsers.type),
    switchMap(() => this.apiService.getUsers().pipe(
      map((users: User[]) => usersActions.loadAllUsersSuccess({users}))
    ))
  ));



  constructor(private actions$: Actions, private apiService: ApiService) {}
}
