import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data',
  template: `
    <p>
      data works!
    </p>
  `,
  styles: [
  ]
})
export class DataComponent implements OnInit {

  public data: any;

  constructor( private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    console.log(this.route.snapshot.data["loadedData"])
  }

}
