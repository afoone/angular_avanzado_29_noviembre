import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { LoginService } from './services/login.service';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RandomForDirective } from './directives/random-for.directive';
import { UnlessDirective } from './directives/unless.directive';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    outlet: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'prescripcion',
    loadChildren: () =>
      import('./prescripcion/prescripcion.module').then(
        m => m.PrescripcionModule
      )
  },

  // {
  //   path: "data",
  //   resolve: {
  //     loadedData: GuardsDataFetchGuard
  //   },
  //   component: DataComponent
  // },

  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, RandomForDirective, UnlessDirective],
  imports: [BrowserModule, RouterModule.forRoot(routes), BrowserAnimationsModule],
  providers: [LoginService, LoginGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
