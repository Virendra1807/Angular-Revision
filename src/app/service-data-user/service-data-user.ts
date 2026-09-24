import { Component } from '@angular/core';
import { Data } from '../services/data';

@Component({
  selector: 'app-service-data-user',
  imports: [],
  templateUrl: './service-data-user.html',
  styleUrl: './service-data-user.css',
})
export class ServiceDataUser {

  constructor(public state: Data) { }

}
