import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'rxjs-root',
  template: `
    <h2>Observable Events</h2>
    <input
      type="text"
      placeholder="Enter stock"
      [formControl]="myInput"
    />
    <div>{{ stock }}</div>
  `,
})
export class AppComponent  {

  myInput = new FormControl('')

  constructor() {
    this.myInput.valueChanges
    .pipe(debounceTime(500))
    .subscribe(
      e => this.getStockFromQuote(e)
    )
  }

  public stock: string | undefined;



  getStockFromQuote(_quote: string) {
    this.stock = `El precio de ${_quote} es ${Math.floor(
       Math.random() * 50
     )} €`;
  }
}
