import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prescripcion } from '../models/prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescripcionService {

  constructor(private http: HttpClient) { }

  getPrescriptions(): Observable<Prescripcion[]> {
    return this.http.get<Prescripcion[]>(
      'http://localhost:4000/prescripciones'
    )
  }
}
