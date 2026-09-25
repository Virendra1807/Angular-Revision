import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pipe-rev',
  imports: [CommonModule],
  templateUrl: './pipe-rev.html',
  styleUrl: './pipe-rev.css',
})
export class PipeRev {

  name = signal("viren mali title");

  todayDate = new Date();

  obj = signal({ name: "Vishal", age: 24, gen: "Male" })

  money = 5210000;


}
