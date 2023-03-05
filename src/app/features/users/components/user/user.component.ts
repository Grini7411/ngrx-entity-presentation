import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {User} from "../../../../models/user.model";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  @Input() user!: User;
}
