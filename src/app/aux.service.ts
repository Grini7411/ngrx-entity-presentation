import { Injectable } from '@angular/core';
import {ApiService} from "./api/api.service";
import {Store} from "@ngrx/store";
import {map, Observable} from "rxjs";
import {User} from "./models/user.model";
import {usersActions, usersSelector} from "./store/users/users.reducer";

@Injectable()
export class AuxService {
  public readonly usersSelector$: Observable<User[]> = this.store.select(usersSelector).pipe(
    map(users => users || [])
  );

  constructor(private apiService: ApiService, private store: Store) { }

  fetchUsers(): void {
    this.store.dispatch(usersActions.loadAllUsers())
  }

  deleteUser(id: number) {
    this.store.dispatch(usersActions.removeUser({id}))
  }

  addUser(user: User) {
    this.store.dispatch(usersActions.addUser({user}))
  }
}
