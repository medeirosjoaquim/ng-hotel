import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { CheckinComponent } from './checkin/checkin.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BoardComponent, CheckinComponent, ConsultasComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    BoardComponent
  ]
})
export class BusinessModule { }
