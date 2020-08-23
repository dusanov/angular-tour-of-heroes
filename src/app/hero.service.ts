import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { GetHeroesResponse } from './get-heroes-response';
import { Payload } from './payload';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web app
  //private heroesUrl = 'api/payload';  // URL to web app

  /** GET hero by id. Will 404 if id not found */
getHero(id: number): Observable<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.get<Hero>(url).pipe(
    tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<Hero>(`getHero id=${id}`))
  );
}

  /*
  getHeroes(): Observable<Payload<GetHeroesResponse>> {
    this.messageService.add('Hero service: fetched heroes');

    const payload = <Payload<GetHeroesResponse>>{ result: HEROES }

    return of(payload);
  }
  */
  /* //this was the original method
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  */

  /** GET heroes from the server */
  //getHeroes(): Observable<Hero[]> {
  getHeroes(): Observable<GetHeroesResponse[]> {
    return this.http.get<GetHeroesResponse[]>(this.heroesUrl)
      //.map(payload => <Payload<GetHeroesResponse>>{result: payload})
      .pipe(
        tap(_ => this.log('heroes fetched')),
        catchError(this.handleError<GetHeroesResponse[]>('getHeroes', <any>[]))
      );
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  constructor(private messageService: MessageService, private http: HttpClient) { }
}
