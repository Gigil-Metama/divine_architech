import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

export interface Payment {
  name: string;
  email: string;
  cc: string;
  expiry: string;
  ccv: string;
  amt: number;
}

export interface PayResult {
  success: boolean;
  result: string;
}

export interface PrayPayLoad {
  url: string;
}
export interface PrayResult {
  success: boolean;
  result: PrayPayLoad;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 

  }

  generatePrayer(text: string): Observable<PrayResult> {
    const body = new HttpParams()
      .set('text', text );
    const options = {
      headers: new HttpHeaders().set(
        'Content-Type', 'application/x-www-form-urlencoded'
      )
    };
    return this.http.post<PrayResult>(
      environment.apiUrl + '/api/divinearchitech/prayer', 
      body, 
      options).pipe(
        catchError(this.handleError)
      );
  }

  pay(data: Payment): Observable<PayResult> {
    const body = new HttpParams()
      .set('amount', data.amt )
      .set('card_number', data.cc)
      .set('exp_month', data.expiry.substring(0, 2))
      .set('exp_year', data.expiry.substring(2))
      .set('cvc', data.ccv);

    const options = {
      headers: new HttpHeaders().set(
        'Content-Type', 'application/x-www-form-urlencoded'
      )
    };

    return this.http.post<PayResult>(
      environment.apiUrl + '/api/divinearchitech/donate', 
      body, 
      options).pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
