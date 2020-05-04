import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  list = [{a: 1}, {a: 2}, {a: 3}, {a: 4}, {a: 5}];

  constructor() {
  }

  ngOnInit(): void {
  }

  l1(event) {
    console.log(event);
  }
}
