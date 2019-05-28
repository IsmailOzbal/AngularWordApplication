import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private logservice: LogService) { }


  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error.error.message == null) {
        this.logservice.log(error.message);

      } else {
        this.logservice.log(error.error.message);
      }
      return of(result as T);
    };
  }
}
