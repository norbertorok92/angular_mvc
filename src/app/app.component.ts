import { Component } from '@angular/core';
import { RestService } from './rest.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MPA APP';

  constructor(
    private _rest: RestService,
    private _router: Router
  ) { }

  goToProfile() {
    const userId = Number(localStorage.getItem('loggedIn'));
    this._router.navigate([`/profile/${userId}`]);
  }
}
