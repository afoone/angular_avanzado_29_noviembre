import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from "../tables/tables.component";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    TableComponent
  ]
})
export class ComponentsModuleModule { }
