import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.restService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.restService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.restService.deleteHero(hero).subscribe();
  }
}
