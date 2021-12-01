import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { notSavedChanges } from "../../interfaces/notSavedChanges";

@Component({
  selector: 'app-prescripcion',
  templateUrl: './prescripcion.component.html',
  styleUrls: ['./prescripcion.component.css']
})
export class PrescripcionComponent implements OnInit , notSavedChanges {

  name: FormControl = new FormControl()

  constructor() { }


  isSavedChanges() {
    return !this.name.dirty
  };

  ngOnInit(): void {
  }

}
