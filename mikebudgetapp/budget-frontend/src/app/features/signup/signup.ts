import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../core/services/userservice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss']
})

export class Signup {
  constructor(private userService: UserService) {}
  
  newUser = { 
    username: '',
    password: '',
    location: '',
    dependents: 0,
    occupation: '',
    income: 0,
    budgets: []
  };

  onSubmit (event: Event) {
    event.preventDefault();
    this.userService.signUpUser(this.newUser).subscribe({
      next: () => console.log('Signup successful'),
      error: err => console.error('Signup error:', err)
    });
  }
}