import { Component } from '@angular/core';
import { UserService } from '../../core/services/userservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  constructor(private userService: UserService) {}

  userToLogin = {
    username: '',
    password: ''
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.userService.logInAUser(this.userToLogin).subscribe({
      next: () => console.log("Success! Logged in"),
      error: (err) => console.error("Something went wrong with Login: ", err)
    });
  }
}
