import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'farmacia';
  prescripcion_route = "prescripcion";
  public invertido_pintado = false;


  toggle()  {
    this.invertido_pintado = !this.invertido_pintado
  }
}
