import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {AuxService} from "../../aux.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit{
  public users$: Observable<User[] | null> | undefined;

  public auxService = inject(AuxService);

  ngOnInit(): void {
    this.auxService.fetchUsers();

    this.users$ = this.auxService.usersSelector$;
  }

  deleteUser(id: number) {
    this.auxService.deleteUser(id);
  }
}
