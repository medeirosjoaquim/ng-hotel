import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ICheckin } from './models/ICheckin.model';
@Injectable({
  providedIn: 'root'
})

export class BusinessService {

  checkinsUrl = environment.checkinsUrl;
  pessoasUrl = environment.pessoaUrl;
  checkins: ICheckin;
  constructor(private http: HttpClient) {
    this.getCheckins().subscribe();
  }

  getCheckins(): Observable<any> {
    return this.http.get<any>
      (this.checkinsUrl)
      .pipe(
        map ( result => this.checkins = result),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    return throwError(`SERVER STATUS: ${err.status}`);
  }
}
