import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {};
  errMsg = '';
  constructor(
    private _rest: RestService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  loginUser() {
    this._rest.loginUser(this.loginUserData)
      .subscribe(
        res => {
          localStorage.setItem('loggedIn', res.userID);
          this._router.navigate(['/home']);
        },
        err => this.errMsg = `Ooops daisy... ${err.statusText}, call an adult`
      );
  }
}
