import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals-revision',
  imports: [],
  templateUrl: './signals-revision.html',
  styleUrl: './signals-revision.css',
})
export class SignalsRevision {

  /**
   *
   */
  constructor() {
    console.log('Ctor : ' + this.count());
    effect(() => {
      if (this.count() > 10) {
        this.count.set(0);
      }
      console.log(this.count());
    });
  }


  count = signal(0);

  changeCount() {
    this.count.update((prev) => prev + 1);
  }

  doubleCount = computed(() => this.count() * 2);

}
