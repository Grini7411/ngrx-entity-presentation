import {Component, inject, OnInit} from '@angular/core';
import {AuxService} from "./aux.service";
import {Observable, of} from "rxjs";
import {User} from "./models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public users: Observable<User[]> = of([]);

  public auxService = inject(AuxService);

  ngOnInit(): void {
    this.users = this.auxService.fetchUsers();
  }


}
