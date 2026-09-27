import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {

  email = new FormControl("abc@gmail.com");
  password = new FormControl("");

  SubmitForm() {
    console.log(this.email.value, this.password.value);
  }

  Reset() {
    this.email.setValue("");
    this.password.setValue("");
  }


}
