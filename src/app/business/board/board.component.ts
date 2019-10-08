import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import data from '../../../shared/checkin.mock.json';
import { ICheckin } from '../models/ICheckin.model';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Output() checkinResults = new EventEmitter<ICheckin[]>();

  constructor() {

  }

  ngOnInit() {
    console.log(data);
  }

}
