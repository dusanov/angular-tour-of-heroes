import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { GetHeroesResponse } from './get-heroes-response';
import { Payload } from './payload';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    /*
    const heroes = <GetHeroesResponse[]>[
        <Hero> { id: 11, name: 'Dr Nice' },
        <Hero> { id: 12, name: 'Narco' },
        <Hero> { id: 13, name: 'Bombasto' },
        <Hero> { id: 14, name: 'Celeritas' },
        <Hero> { id: 15, name: 'Magneta' },
        <Hero> { id: 16, name: 'RubberMan' },
        <Hero> { id: 17, name: 'Dynama' },
        <Hero> { id: 18, name: 'Dr IQ' },
        <Hero> { id: 19, name: 'Magma' },
        <Hero> { id: 20, name: 'Tornado' }
    ];

    const payload = <Payload<GetHeroesResponse>>{ result: heroes }
    return payload;
    */
   const heroes = <GetHeroesResponse[]>[
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
