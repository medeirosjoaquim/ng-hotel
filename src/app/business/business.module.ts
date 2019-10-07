import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { CheckinComponent } from './checkin/checkin.component';
import { ConsultasComponent } from './consultas/consultas.component';

@NgModule({
  declarations: [BoardComponent, CheckinComponent, ConsultasComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    BoardComponent
  ]
})
export class BusinessModule { }
