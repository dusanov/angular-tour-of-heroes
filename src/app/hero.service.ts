import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { GetHeroesResponse } from './get-heroes-response';
import { Payload } from './payload';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Payload<GetHeroesResponse>> {
    this.messageService.add('Hero service: fetched heroes');

    const payload = <Payload<GetHeroesResponse>>{ result: HEROES }

    return of(payload);
  }
  constructor(private messageService: MessageService) { }
}
