import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescripcionComponent } from './components/prescripcion/prescripcion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataComponent } from './components/data.component';
import { PrescripcionListComponent } from './components/prescripcion-list/prescripcion-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PrescripcionComponent, DataComponent, PrescripcionListComponent],
  imports: [CommonModule, ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(
      [
        {
          path: '',
          component: PrescripcionListComponent
        },
        {
          path: 'new',
          component: PrescripcionComponent
        }
      ]
    )
  ],
  exports: [PrescripcionComponent],
})
export class PrescripcionModule {}
