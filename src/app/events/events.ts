import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events',
  imports: [FormsModule],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {

  handleAutoComplete($event: any) {
    console.log($event.target.value);
  }

  handleOnChange($event: any) {
    console.log($event.target.value);
    console.log($event);
  }

  HandleDropDownChnage(event: any) {
    console.log(event.target.value);
  }

  handleMouseLeave() {
    console.log('mouse Leave ');
  }

  handleMouseEnter() {
    console.log('mouse Enter ');
  }

  disableProperty: boolean = true;

  toggleBtn() {
    this.disableProperty = !this.disableProperty;
  }

  name = 'Viren';

}
