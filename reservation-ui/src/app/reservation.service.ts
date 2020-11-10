import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  getAvailability(selectedDate: string, selectedHour: string, id: number): any {
    const reservationUrl = environment.apiHost + '/resource/' + id + '/available?datetime=' + selectedDate + 'T' + selectedHour + ':00';
    return this.http.get(reservationUrl).pipe(
      catchError((err: HttpErrorResponse) => {
        console.error(err);

        return throwError(err);
      })
    );
  }

}
