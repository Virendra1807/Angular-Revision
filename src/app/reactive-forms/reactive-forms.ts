import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {

  // email = new FormControl("abc@gmail.com");
  // password = new FormControl("");

  // SubmitForm() {
  //   console.log(this.email.value, this.password.value);
  // }

  // Reset() {
  //   this.email.setValue("");
  //   this.password.setValue("");
  // }

  formInputs = signal<any>('');

  loginForm = new FormGroup({
    name: new FormControl('ABC'),
    email: new FormControl(),
    password: new FormControl()
  });

  login() {
    this.formInputs.set(this.loginForm.value)
    console.log(this.loginForm.value)
  }

  ResetForm() {
    this.loginForm.setValue({
      name: '',
      email: '',
      password: ''
    })
  }


}
