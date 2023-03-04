import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly BASE_URL = 'https://jsonplaceholder.typicode.com'
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const url = this.BASE_URL + '/users';

    return this.http.get<User[]>(url);
  }
}
