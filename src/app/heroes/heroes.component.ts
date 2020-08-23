import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { GetHeroesResponse } from '../get-heroes-response';
import { Payload } from '../payload';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  //selectedHero: Hero;

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe((payload: GetHeroesResponse[]) => {
                this.heroes = payload.map((response: GetHeroesResponse) => {
                  return <Hero>{
                    id: response.id,
                    name: response.name
                  };
                })
              });
  }
/*
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
*/
  constructor(private heroService: HeroService, private messageService: MessageService) {}
  ngOnInit() {
    this.getHeroes();
  }
}
