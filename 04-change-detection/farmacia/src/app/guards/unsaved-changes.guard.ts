import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PrescripcionComponent } from '../prescripcion/components/prescripcion/prescripcion.component';
import { notSavedChanges } from '../prescripcion/interfaces/notSavedChanges';
import { PrescripcionModule } from '../prescripcion/prescripcion.module';

@Injectable({
  providedIn: 'root',
})
export class UnsavedChangesGuard implements CanDeactivate<notSavedChanges> {

  canDeactivate(
    component: notSavedChanges,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!component.isSavedChanges()) {
      return window.confirm('Tienes cambiios no guardados ¿Quieres continuar?');
    } else
      return true;
  }
}
