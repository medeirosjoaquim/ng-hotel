import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { CheckinComponent } from './checkin/checkin.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PessoaComponent } from './pessoa/pessoa.component';
import { NgxMaskModule } from 'ngx-mask';

import {
  OwlDateTimeModule,
  OwlNativeDateTimeModule,
  OWL_DATE_TIME_LOCALE
} from 'ng-pick-datetime';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [BoardComponent, CheckinComponent, ConsultasComponent, PessoaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NoopAnimationsModule,
    NgxMaskModule.forRoot()

  ],
  exports: [
    BoardComponent
  ],
  providers: [
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'pt'},
  ]
})
export class BusinessModule { }
