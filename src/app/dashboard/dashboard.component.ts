import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.restService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
