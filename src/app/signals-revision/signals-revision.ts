import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signals-revision',
  imports: [CommonModule],
  templateUrl: './signals-revision.html',
  styleUrl: './signals-revision.css',
})
export class SignalsRevision {

  /**
   *
   */
  constructor(public route: ActivatedRoute) {
    console.log('Ctor : ' + this.count());
    effect(() => {
      if (this.count() > 10) {
        this.count.set(0);
      }
      console.log(this.count());
    });
  }

  obj = signal<any>('');

  routeId = signal<string | null>('');

  ngOnInit() {
    console.log('Hello Signal ngOnInIt')

    this.route.queryParams.subscribe((item) =>

      this.obj.set(item)
      // console.log(item);

    )

    this.routeId.set(this.route.snapshot.paramMap.get('id'));

  }


  count = signal(0);

  changeCount() {
    this.count.update((prev) => prev + 1);
  }

  doubleCount = computed(() => this.count() * 2);

}
