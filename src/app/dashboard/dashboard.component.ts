import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { GetHeroesResponse } from '../get-heroes-response';
import { Payload } from '../payload';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe((payload: Payload<GetHeroesResponse>) => {
                this.heroes = payload.result.slice(1,5).map((response: GetHeroesResponse) => {
                  return <Hero>{
                    id: response.id,
                    name: response.name
                  };
                });
              });
  }
}
