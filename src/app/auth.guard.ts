import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _rest: RestService,
    private _router: Router
  ) { }

  canActivate(): boolean {
    if (this._rest.isLoggedIn()) {
      return true;
    } else {
       this._router.navigate(['/login']);
       return false;
    }
  }
}
