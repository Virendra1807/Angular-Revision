import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tut');

  userName = signal("Viren Mali");

  users = signal(["Brus", "Mike", 'Ronda']);

  newUser = signal("");

  AddNewUser() {
    this.users.update(item => [...item, this.newUser()]);
    this.newUser.set("");
  }

}
