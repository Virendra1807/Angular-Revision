import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  @Input() userName!: string;

  @Output() selectedUserParent = new EventEmitter();

  @Output() DeletedUserParent = new EventEmitter();

  SelectedUser(user: string | undefined) {
    this.selectedUserParent.emit(user);
  }

  DeletedUser(user: string | undefined) {
    this.DeletedUserParent.emit(user);
  }

}
