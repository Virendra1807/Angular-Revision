import { Component, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { DynamicComponentAtRuntime } from './dynamic-component-at-runtime/dynamic-component-at-runtime';

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


  selectedUserName = signal<string | undefined>("");

  selectedUserParent(name: string | undefined) {
    this.selectedUserName.set(name);
  }

  DeletedUserParent(user: string) {
    this.users.update(data => data.filter((item) => item != user));
  }


  @ViewChild('container', { read: ViewContainerRef })

  container!: ViewContainerRef | undefined;

  loadComponentDyn() {
    this.container?.clear();

    this.container?.createComponent(DynamicComponentAtRuntime);
  }

}
