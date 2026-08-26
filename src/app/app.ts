import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Events } from './events/events';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Events],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tut');





}
