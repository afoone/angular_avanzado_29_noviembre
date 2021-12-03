import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  private _hasView = false

  @Input()
  set appUnless(condicion: boolean) {
    console.log("estoy pasando la condicion",condicion)
    if (!condicion && !this._hasView) {
      this._container.createEmbeddedView(this._template)
      this._hasView = true
    } else if (condicion) {
      this._container.clear()
      this._hasView = false
    }
  }

  constructor(
    private _template: TemplateRef<any>,
    private _container: ViewContainerRef
  ) {}

}
