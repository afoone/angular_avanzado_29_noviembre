import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescripcionListComponent } from './prescripcion-list.component';

describe('PrescripcionListComponent', () => {
  let component: PrescripcionListComponent;
  let fixture: ComponentFixture<PrescripcionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescripcionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescripcionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
