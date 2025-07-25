import { Component } from '@angular/core';
import { UserService } from '../../core/services/userservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss', '../../sharedStyles/Fields.scss']
})
export class Login {
  constructor(private userService: UserService) {}

  userToLogin = {
    username: '',
    password: ''
  }

  loggedInUserId = 0;

  onSubmit(event: Event) {
    event.preventDefault();
    this.userService.logInAUser(this.userToLogin).subscribe({
      next: (userId) => {this.loggedInUserId = userId},
      error: (err) => console.error("Something went wrong with Login: ", err)
    });
  }
}
