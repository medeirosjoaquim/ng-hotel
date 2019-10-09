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
  filteredCheckinList: ICheckin[];
  unfilteredCheckinList: ICheckin[];
  constructor(private data: DataService) { }
  filtrar = false;
  filterBy = 'pessoasPresentes';

  ngOnInit() {
    this.data.currentCheckin.subscribe(result => this.checkinList = result);
    this.unfilteredCheckinList = this.checkinList;
    console.log(this.checkinList);
  }

  diff(dateStart, dateEnd) {
    const start = moment(dateStart);
    const end = moment(dateEnd);
    const diff = end.diff(start, 'days');
    return diff;
  }

  calculateFare(start, end) {
    // implementar diferenciação entre dia de semana
    // e taxa de fim de semana
    const result = this.diff(start, end) * 120;
    return result;
  }

  getData(): ICheckin[] {
    let arr: any;
    this.data.currentCheckin.subscribe(result => {
      arr = result;
    });
    return arr;
  }
  formatDate(date) {
    return moment(date).format('DD MMM, YYYY');
  }
  formatTime(time) {
    return moment(time).format('HH:MM');
  }
  filterPresentes() {
    let filterArr = this.getData();
    filterArr = filterArr.filter((item) => {
      return moment(item.dataSaida).isAfter(moment(), 'day') || moment(item.dataSaida) === moment();
    });
    return filterArr;
  }
  filterAusentes() {
    let filterArr = this.getData();
    filterArr = filterArr.filter((item) => {
      return moment(item.dataSaida).isBefore(moment(), 'day') ;
    });
    return filterArr;
  }
  filterChange() {
    if (this.filtrar) {
      switch (this.filterBy) {
        case 'pessoasPresentes':
          console.log('presentes');
          this.checkinList =
            this.filterPresentes();
          break;
        case 'pessoasAusentes':
          console.log('ausentes');
          this.checkinList =
          this.filterAusentes();
          break;
      }
    } else {
      this.data.currentCheckin.subscribe(result => this.checkinList = result);
    }
  }
}
