import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductService, ProductServiceImplement } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [{
    provide: ProductService,
    useClass: ProductServiceImplement
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
