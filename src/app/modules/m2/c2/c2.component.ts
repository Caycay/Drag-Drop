import {Component, OnInit} from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

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

  l1(event: CdkDragDrop<any>) {
    const drop = document.getElementById('dropList');

    const {offsetLeft, offsetTop} = event.item.getRootElement();

    const dropPositionLeft = offsetLeft + event.distance.x;
    const dropPositionTop = offsetTop + event.distance.y;

    const finalContainerPositionLeft = dropPositionLeft - drop.offsetLeft;
    const finalContainerPositionTop = dropPositionTop - drop.offsetTop;

    const div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.background = 'blue';
    div.style.position = 'absolute';
    div.style.left = finalContainerPositionLeft + 'px';
    div.style.top = finalContainerPositionTop + 'px';
    drop.appendChild(div);
  }
}
