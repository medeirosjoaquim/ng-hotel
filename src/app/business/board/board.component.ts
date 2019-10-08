import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BusinessService } from '../business.service';
import { ICheckin } from '../models/ICheckin.model';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Output() checkinResults = new EventEmitter<ICheckin[]>();

  constructor(private bs: BusinessService) {

  }

  ngOnInit() {
    if (this.bs.checkins !== undefined) {
      console.log(this.bs.checkins);
    }
  }

}
