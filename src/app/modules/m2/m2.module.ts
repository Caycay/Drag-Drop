import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C2Component } from './c2/c2.component';
import {DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [C2Component],
  exports: [
    C2Component
  ],
  imports: [
    CommonModule,
    DragDropModule
  ]
})
export class M2Module { }
