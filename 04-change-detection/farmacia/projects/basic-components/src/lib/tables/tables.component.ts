import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'imagina-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TableComponent implements OnChanges {

  @Input()
  public data: Array<any>

  public keys: Array<string>

  constructor() {
    this.data = []
    this.keys = []
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data.length>0) {
      this.keys = Object.keys(this.data[0])
    }
  }

  getKeys (item: any): string[] {
    return Object.keys(item)
  }

}
