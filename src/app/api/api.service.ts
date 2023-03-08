import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User, UserResponse} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly BASE_URL = 'https://jsonplaceholder.typicode.com'
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const url = this.BASE_URL + '/users';

    return this.http.get<UserResponse[]>(url).pipe(
      map((users: UserResponse[]) => {
        return users.map(user => ({
          id:      user.id,
          name:    user.name,
          company: user.company.name,
          email:   user.email
        }))
      })
    );
  }
}
