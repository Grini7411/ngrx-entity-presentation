import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {User} from "../../../../models/user.model";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  @Input() user!: User;
}
