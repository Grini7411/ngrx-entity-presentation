import { Injectable } from '@angular/core';
import {ApiService} from "./api/api.service";
import {Store} from "@ngrx/store";
import {usersSelector} from "./store/users/users.selectors";
import {usersActions} from "./store/users/users.actions";
import {map, Observable} from "rxjs";
import {User} from "./models/user.model";
import {UserState} from "./store/users/users.reducers";

@Injectable()
export class AuxService {
  public readonly usersSelector$: Observable<User[]> = this.store.select(usersSelector).pipe(
    map(users => users || [])
  );

  constructor(private apiService: ApiService, private store: Store<UserState>) { }

  fetchUsers(): void {
    this.store.dispatch(usersActions.loadAllUsers())
  }

  addUser(user: User) {
    this.store.dispatch(usersActions.addUser({user}))
  }

  deleteUser(id: number) {
    this.store.dispatch(usersActions.removeUser({id}))
  }

}
