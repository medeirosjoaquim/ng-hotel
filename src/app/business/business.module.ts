import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { CheckinComponent } from './checkin/checkin.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PessoaComponent } from './pessoa/pessoa.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [BoardComponent, CheckinComponent, ConsultasComponent, PessoaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NoopAnimationsModule
  ],
  exports: [
    BoardComponent
  ]
})
export class BusinessModule { }
