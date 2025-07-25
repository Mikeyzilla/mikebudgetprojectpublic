import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../core/services/userservice';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss', '../../sharedStyles/Fields.scss']
})

export class Signup {
  constructor(private userService: UserService) {}
  
  newUser = { 
    username: '',
    password: '',
    location: 'Unknown',
    dependents: 0,
    occupation: 'Unemployed',
    income: 0,
    budgets: []
  };

  get isUsernameLengthValid(): boolean {
    return this.newUser.username.length >= 8;
  }

  get passwordHasMinLength(): boolean {
    return this.newUser.password.length >= 8;
  }

  get passwordHasUppercase(): boolean {
    return /[A-Z]/.test(this.newUser.password);
  }

  get passwordHasSpecialChar(): boolean {
    return /[^a-zA-Z0-9]/.test(this.newUser.password);
  }


  onSubmit (event: Event) {
    event.preventDefault();
    this.userService.signUpUser(this.newUser).subscribe({
      next: () => console.log('Signup successful'),
      error: err => console.error('Signup error:', err)
    });
  }
}