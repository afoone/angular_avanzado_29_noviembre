import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescripcionComponent } from './components/prescripcion/prescripcion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataComponent } from './components/data.component';
import { PrescripcionListComponent } from './components/prescripcion-list/prescripcion-list.component';
import { RouterModule } from '@angular/router';
import { UnsavedChangesGuard } from '../guards/unsaved-changes.guard';
import { LoginGuard } from '../guards/login.guard';

@NgModule({
  declarations: [PrescripcionComponent, DataComponent, PrescripcionListComponent],
  imports: [CommonModule, ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(
      [
        {
          path: '',
          component: PrescripcionListComponent,
          canDeactivate: [UnsavedChangesGuard],
          canActivate: [LoginGuard]
        },
        {
          path: 'new',
          component: PrescripcionComponent
        }
      ]
    )
  ],
  providers: [UnsavedChangesGuard, LoginGuard ],
  exports: [PrescripcionComponent],
})
export class PrescripcionModule {}
