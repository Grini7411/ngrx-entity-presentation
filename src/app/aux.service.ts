import { Injectable } from '@angular/core';
import {ApiService} from "./api/api.service";
import {Store} from "@ngrx/store";
import {usersActions} from "./store/users/user.actions";
import {map, Observable} from "rxjs";
import {User} from "./models/user.model";
import {usersSelector} from "./store/users/users.selectors";

@Injectable()
export class AuxService {
  public readonly usersSelector$: Observable<User[]> = this.store.select(usersSelector).pipe(
    map(users => users || [])
  );

  constructor(private apiService: ApiService, private store: Store) { }

  fetchUsers(): void {
    this.store.dispatch(usersActions.loadAllUsers())
    // return this.apiService.getUsers();
  }
}
