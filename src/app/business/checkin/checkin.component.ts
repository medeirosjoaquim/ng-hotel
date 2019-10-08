import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      dataEntrada: ['', Validators.required],
      dataSaida: ['', Validators.required],
      pessoa: ['', Validators.required],
      possuiVeiculo: [false]
    });
  }

  ngOnInit() {
  }

  get dataEntrada() { return this.form.get('dataEntrada'); }
  get dataSaida() { return this.form.get('dataSaida'); }
  get pessoa() { return this.form.get('pessoa'); }
  get possuiVeiculo() { return this.form.get('possuiVeiculo'); }

}
