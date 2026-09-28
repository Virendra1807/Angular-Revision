import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-forms.html',
  styleUrl: './template-driven-forms.css',
})
export class TemplateDrivenForms {

  formData: any = undefined;

  AddUser(data: any) {
    this.formData = data;
    console.log(data);
  }

}
