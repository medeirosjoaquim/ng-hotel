import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICheckin } from '../app/business/models/ICheckin.model';
import { IPessoa } from '../app/business/models/IPessoa.model';
import checkinData from '../shared/checkin.mock.json';
import pessoasData from '../shared/pessoas.mock.json';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private checkinDataSource = new BehaviorSubject<ICheckin[]>(checkinData);

  private pessoasDataSource = new BehaviorSubject<IPessoa[]>(pessoasData);


  currentCheckin = this.checkinDataSource.asObservable();
  currentPessoa = this.pessoasDataSource.asObservable();

  constructor() { }

  addCheckin(checkin: ICheckin): void {
    this.checkinDataSource.next([...this.checkinDataSource.getValue(), checkin]);
  }

  addPessoa(pessoa: IPessoa): void {
    this.pessoasDataSource.next([...this.pessoasDataSource.getValue(), pessoa]);
  }

}
