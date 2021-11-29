import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescripcionComponent } from './components/prescripcion/prescripcion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataComponent } from './components/data.component';

@NgModule({
  declarations: [PrescripcionComponent, DataComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [PrescripcionComponent],
})
export class PrescripcionModule {}
