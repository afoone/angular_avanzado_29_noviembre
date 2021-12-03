import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { Prescripcion } from '../../models/prescription';
import { PrescripcionService } from '../../services/prescripcion.service';
import { List } from "immutable";

@Component({
  selector: 'app-prescripcion-list',
  templateUrl: './prescripcion-list.component.html',
  styleUrls: ['./prescripcion-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrescripcionListComponent implements OnInit, DoCheck {
  public data: List<Prescripcion>;
  public suma: number;

  constructor(private prescripcionService: PrescripcionService) {
    this.data = List<Prescripcion>();
    this.suma= 0;
  }
  ngDoCheck(): void {
    console.log("checked", this.suma)
    this.suma = this.data.toArray().length
  }

  ngOnInit(): void {
    this.prescripcionService
      .getPrescriptions()
      .subscribe((prescriptions) => (this.data = List(prescriptions)));
  }

  addData = () => {
    console.log("data", this.data)

    // this.data = [...this.data.filter(i => i.paciente!=24), {
    //     dosis: '300mg',
    //     medicamento: 'Ultralevura',
    //     paciente: 24,
    //     pauta: 'c6h',
    //   }
    //  ]

   this.data = this.data.push({
      dosis: '300mg',
      medicamento: 'Ultralevura',
      paciente: 24,
      pauta: 'c6h',
    });
  };
}
