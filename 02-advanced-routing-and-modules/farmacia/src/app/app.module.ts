import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PrescripcionModule } from './prescripcion/prescripcion.module';
import { HomeComponent } from './components/home/home.component';
import { PrescripcionComponent } from './prescripcion/components/prescripcion/prescripcion.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { LoginService } from './services/login.service';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';
import { GuardsDataFetchGuard } from './guards/guards-data-fetch.guard';
import { DataComponent } from './prescripcion/components/data.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'prescripcion',
    component: PrescripcionComponent,
    canActivate: [LoginGuard],
    canDeactivate: [UnsavedChangesGuard]
  },
  {
    path: "data",
    resolve: {
      loadedData: GuardsDataFetchGuard
    },
    component: DataComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent],
  imports: [BrowserModule, PrescripcionModule, RouterModule.forRoot(routes)],
  providers: [LoginService, LoginGuard, UnsavedChangesGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
