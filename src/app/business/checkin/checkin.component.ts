import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { IPessoa } from '../models/IPessoa.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {
  form: FormGroup;
  pessoas: IPessoa[];
  constructor(private fb: FormBuilder, private data: DataService) {
    this.form = this.fb.group({
      dataEntrada: ['', Validators.required],
      dataSaida: ['', Validators.required],
      pessoa: [null, Validators.required],
      possuiVeiculo: [false]
    });

    this.data.currentPessoa.subscribe(result => this.pessoas = result);
    console.log(this.pessoas);

  }

  ngOnInit() {
  }

  get dataEntrada() { return this.form.get('dataEntrada'); }
  get dataSaida() { return this.form.get('dataSaida'); }
  get pessoaControlValue() { return this.form.get('pessoa'); }
  get possuiVeiculo() { return this.form.get('possuiVeiculo'); }

}
