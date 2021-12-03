import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PrescripcionService } from './prescripcion.service';

describe('PrescripcionService', () => {
  let service: PrescripcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(PrescripcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
