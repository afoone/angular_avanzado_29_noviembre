import { Component, Inject, OnInit } from '@angular/core';
import { Config } from 'src/app/models/config';
import { Product } from 'src/app/models/product';
import {
  ProductService,
  productServiceFactory,
} from 'src/app/services/product.service';
import { config } from 'src/app/config/config';

@Component({
  selector: 'di-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [
    {
      provide: 'IS_PROD_ENVIRONMENT',
      useValue: config,
    },
    {
      provide: 'MY_NEW_SERVICE',
      useFactory: productServiceFactory,
      deps: ['IS_PROD_ENVIRONMENT'],
    },
  ],
})
export class ProductComponent implements OnInit {
  public product: Product | undefined;

  // constructor(private _productService: ProductService, @Inject('IS_PROD_ENVIRONMENT') private _prod:boolean) {}
  constructor(
    @Inject(ProductService) private _productService: ProductService,
    @Inject('IS_PROD_ENVIRONMENT') private _prod: Config,
    @Inject('MY_NEW_SERVICE') private _anotherProductService: ProductService
  ) {}

  ngOnInit(): void {
    this._productService.getProduct().subscribe((p) => (this.product = p));
  }
}
