import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1Component } from './c1/c1.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { C3Component } from './c3/c3.component';



@NgModule({
  declarations: [C1Component, C3Component],
  exports: [
    C1Component
  ],
  imports: [
    CommonModule,
    DragDropModule
  ]
})
export class M1Module { }
