import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  price: number;
}

@Injectable()
export class ProductService {
  products: Array<Product>[] = [
    [
      {
        id: 1,
        title: 'produtct 1',
        price: 34,
      },
      {
        id: 2,
        title: 'produtct 2',
        price: 7,
      },
      {
        id: 3,
        title: 'produtct 3',
        price: 3.4,
      },
    ],
    [
      {
        id: 1,
        title: 'produtct 1',
        price: 35,
      },
      {
        id: 2,
        title: 'produtct 2',
        price: 6,
      },
      {
        id: 3,
        title: 'produtct 3',
        price: 5.4,
      },
    ],
  ];

  getProducts(): Observable<Product[]> {
    return from(this.products);
  }
}
