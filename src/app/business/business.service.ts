import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BusinessService {

  checkinsUrl = environment.checkinsUrl;
  pessoasUrl = environment.pessoaUrl;
  constructor(private http: HttpClient) { }

  getCheckins(): Observable<any> {
    return this.http.get<any>
      (this.checkinsUrl)
      .pipe(
        tap (console.log),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    return throwError(`SERVER STATUS: ${err.status}`);
  }
}
