import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user!: User;
}
