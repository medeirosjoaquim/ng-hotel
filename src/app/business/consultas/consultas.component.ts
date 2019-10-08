import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ICheckin } from '../models/ICheckin.model';
import moment from 'moment';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {
  checkinList: ICheckin[];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentCheckin.subscribe(result => this.checkinList = result);
    console.log(this.checkinList);
  }

  diff(dateStart, dateEnd) {
    const start = moment(dateStart);
    const end = moment(dateEnd);
    const diff = end.diff(start, 'days');
    return diff;
  }

  formatDate(date) {
    return moment(date).format('DD MMM, YYYY');
  }
  formatTime(time) {
    return moment(time).format('HH:MM');
  }

}
