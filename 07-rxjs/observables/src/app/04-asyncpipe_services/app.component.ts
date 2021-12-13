import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, fromEvent, interval, map, Observable, take } from 'rxjs';
import { Product, ProductService } from './product.service';

@Component({
  selector: 'rxjs-root',
  template: `
    <h2>Async Pipe</h2>
    <ul>
      <li *ngFor="let item of products$ | async">
        {{item.title}} {{item.price | currency: "EUR"}}
      </li>
    </ul>

  `,
})
export class AppComponent implements OnInit{

  products$: Observable<Product[]> | undefined

  constructor(private service: ProductService) {

  }

  ngOnInit(): void {
    this.products$ = this.service.getProducts()
    this.products$?.subscribe(console.log)
  }


}
