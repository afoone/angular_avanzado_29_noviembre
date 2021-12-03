import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { max } from 'rxjs';

@Directive({
  selector: '[appRandomFor]'
})
export class RandomForDirective {

  @Input()
  set appRandomFor (max: number) {
    console.log(max)
    const times = Math.floor(Math.random()*max)
    for (let index = 0; index < times; index++) {
      this._container.createEmbeddedView(this._template)
    }
  }

  constructor(
    private _template: TemplateRef<any>,
    private _container: ViewContainerRef
  ) {
    console.log(_template, _container)
  }

}
