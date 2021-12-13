import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, fromEvent, interval, map, take } from 'rxjs';

@Component({
  selector: 'rxjs-root',
  template: `
    <h2>Async Pipe</h2>
    <h2>{{number$ | async}}</h2>
    <h2>{{number}}</h2>
  `,
})
export class AppComponent  {

  number$ = interval(1000).pipe(take(20))

  public number: number = 0;

  constructor() {
    this.number$.subscribe(r => this.number = r)
  }
}
