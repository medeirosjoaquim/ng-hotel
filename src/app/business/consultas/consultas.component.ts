import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ICheckin } from '../models/ICheckin.model';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {
  checkinList: ICheckin[];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(result => this.checkinList = result);
    console.log(this.checkinList);
  }
  addPessoa() {
    this.data.addCheckin(
      {
        hospede: { nome: 'Teste hospede', documento: '999999', fone: '555-5555' },
        dataEntrada: '2020-07-19T08:51:34Z',
        dataSaida: '2020-07-04T07:42:41Z',
        adicionalEstacionamento: false
      },
    );
  }
}
