import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantApiService {
  endpoint: string = "https://wt-f293cb80808b2b97de7ea3fe6d7984d5-0.sandbox.auth0-extend.com/tacoma-eats"

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type':  'application/json'
  })

  constructor(private http: HttpClient) {

  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getRestaurants() {
    return this.http.get(this.endpoint).pipe(map(this.extractData));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
