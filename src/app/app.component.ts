import { Component } from '@angular/core';
import { RestService } from './rest.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MPA APP';
  userId = Number(localStorage.getItem('loggedIn'));
  constructor(
    private _rest: RestService
  ) { }
}
