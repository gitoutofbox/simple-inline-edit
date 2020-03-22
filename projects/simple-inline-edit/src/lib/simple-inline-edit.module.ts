import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { SimpleInlineEditComponent } from './simple-inline-edit.component';



@NgModule({
  declarations: [SimpleInlineEditComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [SimpleInlineEditComponent]
})
export class SimpleInlineEditModule { }
