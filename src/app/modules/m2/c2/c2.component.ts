import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  list2 = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  l1(event) {
    console.log(event);
    const offsetLeft = event.item.element.nativeElement.offsetLeft;
    const offsetTop = event.item.element.nativeElement.offsetTop;

    const drag = document.getElementById('dragList');

    console.log(event.distance.x);

    const elDistanceInContainer = drag.clientWidth - offsetLeft;
    console.log(elDistanceInContainer);
    const margin = 400;
    console.log(margin);

    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.background = 'blue';
    div.style.position = 'absolute';
    div.style.left = (event.distance.x - elDistanceInContainer - margin) + 'px';
    div.style.top = (event.distance.y + offsetTop) + 'px';
    const drop = document.getElementById('dropList');
    drop.appendChild(div);
  }
}
