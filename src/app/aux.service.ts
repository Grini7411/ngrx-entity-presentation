import { Injectable } from '@angular/core';
import {ApiService} from "./api/api.service";
import {Observable} from "rxjs";
import {User} from "./models/user.model";

@Injectable()
export class AuxService {
  constructor(private apiService: ApiService) { }

  fetchUsers(): Observable<User[]> {
    return this.apiService.getUsers();
  }
}
