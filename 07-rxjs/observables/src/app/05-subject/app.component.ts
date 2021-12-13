import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, Subject } from 'rxjs';

@Component({
  selector: 'rxjs-root',
  template: `
  <div (mousemove)="mouseSubject$.next($event)">
    <h2>Uso de subject para los eventos de keyup</h2>
    <input
      type="text"
      placeholder="Enter stock"
      (keyup)="keySubject$.next($event)"
    />
  </div>
  `,
})
export class AppComponent  {

  keySubject$ = new Subject()
  mouseSubject$ = new Subject()

  constructor() {
    this.keySubject$.subscribe(
      (event:any) => {
        console.log(`Evento ${event['type']} key ${event['key']}`)
      }
    )
    this.mouseSubject$.subscribe(
      (event:any) => {
        console.log(`Evento ${event['type']} Postion: ${event['screenX']} , ${event['screenY']} `)
      }
    )
  }

}
