import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'rxjs-root',
  template: `
    <h2>Observable Events</h2>
    <!-- <input
      type="text"
      placeholder="Enter stock"
      (keyup)="getStockFromQuote()"
      [(ngModel)]="inputValue"
      #stockSymbol
    /> -->
    <input
      type="text"
      placeholder="Enter stock"
      #stockSymbol
    />
    <div>{{ stock }}</div>
  `,
})
export class AppComponent implements AfterViewInit {


  @ViewChild('stockSymbol', { static: true })
  myInputField: ElementRef | undefined;


  public stock: string | undefined;

  // public inputValue: string;

  // constructor() {
  //   this.inputValue = '';
  // }
  ngAfterViewInit(): void {
    const keyUp$ = fromEvent(this.myInputField?.nativeElement, "keyup")

    keyUp$
    .pipe(
      debounceTime(500),
      map((event:any) => event['target']['value'])
    )
    .subscribe({
      next: (e) => this.getStockFromQuote(e),
      error: (err) => console.error(err)
    })

  }

  getStockFromQuote(_quote: string) {
    this.stock = `El precio de ${_quote} es ${Math.floor(
       Math.random() * 50
     )} €`;
  }
}
