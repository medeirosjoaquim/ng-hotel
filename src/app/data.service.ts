import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICheckin } from '../app/business/models/ICheckin.model';
import data from '../shared/checkin.mock.json';
@Injectable({
  providedIn: 'root'
})

export class DataService {

  private dataSource = new BehaviorSubject<ICheckin[]>(data);
  currentMessage = this.dataSource.asObservable();

  constructor() { }

  addCheckin(checkin: ICheckin): void {
    this.dataSource.next([...this.dataSource.getValue(), checkin]);
  }

}
