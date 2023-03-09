import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {AuxService} from "../../aux.service";
import {User} from "../../models/user.model";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  addUserForm: FormGroup = new FormGroup<any>({
    name: new FormControl(null, [Validators.required]),
    company: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email])
  });

  constructor(private auxService: AuxService) {
  }
  addUser() {
    if (this.addUserForm.valid) {
      const user: User = {
        name:    this.addUserForm.controls['name'].value,
        company: this.addUserForm.controls['company'].value,
        email:   this.addUserForm.controls['email'].value
      }
      this.auxService.addUser(user)
    }
  }
}
