import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
    name: new FormControl('ABC', [Validators.maxLength(10), Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.minLength(4), Validators.required])
  });

  get name() {
    return this.loginForm.get("name");
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

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
