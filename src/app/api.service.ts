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

export interface PublishResult{
  status: boolean;
  result: string;
}

export interface PublishListPayload{
  id: string;
  url: string;
  file_name: string;
  path: string;
}

export interface PrayPayLoad {
  url: string;
}

export interface PrayResult {
  success: boolean;
  result: PrayPayLoad;
}

export interface PublishListResult{
  success: boolean;
  result: PublishListPayload[];
}

export interface TotalDonationPayload{
  total: number;
}

export interface TotalDonationResult{
  success: boolean;
  result: number;
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

  publish(url:string, name:string, email:string): Observable<PublishResult>{
    const body = new HttpParams()
      .set('image', url )
      .set('name', name )
      .set('email', email );
    const options = {
      headers: new HttpHeaders().set(
        'Content-Type', 'application/x-www-form-urlencoded'
      )
    };

    return this.http.post<PublishResult>(
      environment.apiUrl + '/api/divinearchitech/publish',
      body,
      options).pipe(
        catchError(this.handleError)
      );
  }

  getPublishedImages(): Observable<PublishListResult>{
    return this.http.get<PublishListResult>(
      environment.apiUrl + '/api/divinearchitech/publish'
      );
  }

  getTotalDonation(): Observable<TotalDonationResult>{
    return this.http.get<TotalDonationResult>(
      environment.apiUrl + '/api/divinearchitech/total-donation'
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
