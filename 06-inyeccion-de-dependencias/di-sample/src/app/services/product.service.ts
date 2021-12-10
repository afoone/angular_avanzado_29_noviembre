import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Config } from '../models/config';

export function productServiceFactory(isProd: Config): ProductService {
  return isProd.is_prod_environment ? new MockProductService2(): new MockProductService()
}

@Injectable({
  providedIn: 'root',
})
export abstract class ProductService {
  abstract getProduct(): Observable<Product>
}

@Injectable({
  providedIn: 'root',
})
export class ProductServiceImplement extends ProductService  {

  public page:number|undefined;

  constructor(private http: HttpClient) {
    super()
  }

  getProduct(): Observable<Product> {
    return this.http.get<Product>('http://localhost:4000/product');
  }
}

@Injectable({
  providedIn: 'root',
})
export class MockProductService extends ProductService {
  constructor() {
    super()
  }

  getProduct(): Observable<Product> {
    return new Observable<Product>(
      subscriber => subscriber.next(
        {
          id: 1,
          price: 34.99,
          title: "test title",
          description: "test description"
        }
      )
    )
  }
}

@Injectable({
  providedIn: 'root',
})
export class MockProductService2 extends ProductService {
  constructor() {
    super()
  }

  getProduct(): Observable<Product> {
    return new Observable<Product>(
      subscriber => subscriber.next(
        {
          id: 1,
          price: 34.99,
          title: "test title",
          description: "test description"
        }
      )
    )
  }
}


