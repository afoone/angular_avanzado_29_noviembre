import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnlessDirective } from './unless.directive';

// creo un componente para probar la directiva
// contruuir los templateref sería muy complicado
@Component({
  template: `
    <div id="false" *appUnless="state">Hola Mundo</div>
    <div id="true" *appUnless="!state">Hola Mundo</div>
  `,
})
class MockComponent {
  public state: boolean = false;
}

// describe: agrupación de test con el mismo beforeeach
describe('unless directive', () => {
  let fixture: ComponentFixture<MockComponent>;

  // configurar el módulo
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [MockComponent, UnlessDirective],
    }).compileComponents();
  });

  // creamos el componente que vamos a probar
  beforeEach(() => {
    fixture = TestBed.createComponent(MockComponent);
    fixture.detectChanges();
  });

  it('should create an instance of the directive', () => {
    const directive = new UnlessDirective(
      fixture.nativeElement,
      fixture.nativeElement
    );
    expect(directive).toBeTruthy();
  });

  it('should create the inxtance of the component', () => {
    expect(fixture).toBeDefined();
  });

  it('renders element on false', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('#false')).toBeDefined();
    expect(element.querySelector('#false')?.textContent).toContain(
      'Hola Mundo'
    );
  });

  it('does not render element on true', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('#true')).toBeNull();
  });

  it('on state true renders different', () => {
    fixture.componentInstance.state = true;
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('#false')).toBeFalsy();
    expect(element.querySelector('#true')).toBeTruthy();
  });
});
