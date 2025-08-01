import { Component } from '@angular/core';
import { UserService } from '../../core/services/userservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserSessionService } from '../../core/services/user-session-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss', '../../sharedStyles/Fields.scss']
})
export class Login {
  constructor(private userService: UserService, private userSession: UserSessionService) {}

  userToLogin: LoginRequest = {
    username: '',
    password: ''
  };

  onSubmit(event: Event) {
    event.preventDefault();
    this.userService.logInAUser(this.userToLogin).subscribe({
      next: (userId) => {
        this.userSession.setOurUserId(userId);
      },
      error: (err) => console.error("Something went wrong with Login: ", err)
    });
  }
}
