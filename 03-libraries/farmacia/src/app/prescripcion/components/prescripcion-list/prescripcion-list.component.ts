import { Component, OnInit } from '@angular/core';
import { Prescripcion } from '../../models/prescription';
import { PrescripcionService } from '../../services/prescripcion.service';

@Component({
  selector: 'app-prescripcion-list',
  templateUrl: './prescripcion-list.component.html',
  styleUrls: ['./prescripcion-list.component.css']
})
export class PrescripcionListComponent implements OnInit {

  public data: Prescripcion[]

  constructor(private prescripcionService: PrescripcionService) {
    this.data = []
   }

  ngOnInit(): void {
    this.prescripcionService.getPrescriptions().subscribe(
      prescriptions => this.data = prescriptions
    )
  }

}
