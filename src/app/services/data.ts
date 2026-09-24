import { Injectable, signal } from '@angular/core';

@Injectable({ // Injectable defines that we can inject this service in another components
  providedIn: 'root', // providedIn root means only one instance is created for this class Data as all components used the same 
})

export class Data {

  count = signal<number>(0);

  increment() {
    this.count.update(c => c + 1);
  }


  decrement() {
    this.count.update(c => c - 1);
  }


  reset() {
    this.count.update(c => c - c);
  }

}
