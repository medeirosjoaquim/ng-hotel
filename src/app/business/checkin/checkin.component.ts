import { Component, OnInit, ElementRef } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { IPessoa } from '../models/IPessoa.model';
import { ICheckin } from '../models/ICheckin.model';
import moment from 'moment';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {
  form: FormGroup;
  pessoas: IPessoa[];
  firstInput: any;
  constructor(private fb: FormBuilder, private data: DataService, private el: ElementRef, ) {
    this.form = this.fb.group({
      dataEntrada: ['', Validators.required],
      dataSaida: ['', Validators.required],
      pessoa: [null, Validators.required],
      possuiVeiculo: [false]
    });

    this.data.currentPessoa.subscribe(result => this.pessoas = result);
  }

  ngOnInit() {
    this.firstInput = this.el.nativeElement.getElementsByClassName('data-entrada');
    this.firstInput[0].focus();

  }

  get _dataEntrada() { return this.form.get('dataEntrada'); }
  get _dataSaida() { return this.form.get('dataSaida'); }
  get _pessoaControlValue() { return this.form.get('pessoa'); }
  get _possuiVeiculo() { return this.form.get('possuiVeiculo'); }

  submitCheckin() {
    if (this.form.invalid) {
      return;
    }
    const persist: ICheckin = {
      hospede: this._pessoaControlValue.value,
      dataEntrada: moment(this._dataEntrada.value).toISOString(),
      dataSaida: moment(this._dataSaida.value).toISOString(),
      adicionalEstacionamento: this._possuiVeiculo.value
    };
    this.data.addCheckin(persist);
    this.form.reset();
  }
}
