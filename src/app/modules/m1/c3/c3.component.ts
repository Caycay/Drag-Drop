import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

  @Input() el;

  constructor() {
  }

  ngOnInit(): void {
  }

  drag($event) {
    console.log($event);
  }

  drop($event) {
    console.log($event);
  }
}
