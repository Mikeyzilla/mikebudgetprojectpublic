import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBar } from './components/navigation-bar/navigation-bar';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBar, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class App {
  protected readonly title = signal('budget-frontend');
}