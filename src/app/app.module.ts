import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {M1Module} from './modules/m1/m1.module';
import {M2Module} from './modules/m2/m2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    M1Module,
    M2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
