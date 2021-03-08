import { Component, OnInit } from '@angular/core';
import { updateIntersectionTypeNode } from 'typescript';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent implements OnInit {

  // x: string = '';
  id: number = 200;
  name: string;
  quantity: number;
  rate: number;
  units: string[] = ['Pcs', 'kg', 'meter'];
  unit: string = this.units[1]
  
  constructor() { }

  ngOnInit(): void {
    // this.id = 134;
    // let su: string = 'superuser';

  }
  // mhOpoJkhchjci() {
  //   let su: string = 'superuser';
  //   this.id = 134;
  // }
  k() {
    console.log('this is id : ' + this.id);
    // for (let r of this.units) {
    //   console.log('here is value : '+r);

    // }
  }
}
