import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {};
  constructor(
    private _rest: RestService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  registerUser() {
    const data =  JSON.stringify(this.registerUserData);
    this._rest.registerUser(data)
      .subscribe(
        res => {
          localStorage.setItem('loggedIn', res.userID);
          localStorage.setItem('userRole', res.userRole);
          this._router.navigate(['/home']);
        },
        err => console.log(err)
      );
  }

}
