import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockProductService, ProductService } from 'src/app/services/product.service';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      imports:[],
      providers: [
        {
          provide: ProductService,
          useClass: MockProductService
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("shows all attributes", () => {
    const element = fixture.nativeElement as HTMLElement
    expect(element.querySelector("#price")?.textContent).toContain("34.99")
    expect(element.querySelector("#title")?.textContent).toContain("test title")
    expect(element.querySelector("#description")?.textContent).toContain("test description")
  })
});
