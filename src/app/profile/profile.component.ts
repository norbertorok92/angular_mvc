import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userProfile = [];
  posts = [];
  events = [];
  visitedProfile = null;
  loggedInUserId = Number(localStorage.getItem('loggedIn'));
  userRole = localStorage.getItem('userRole');
  subscription = {
    'visitor': 'member',
    'member': 'admin'
  };

  constructor(
    private _activeRouter: ActivatedRoute,
    private _router: Router,
    private _rest: RestService
  ) {
  }

  ngOnInit() {
    this._activeRouter.url.subscribe(url => {
      this.fetchData();
    });
  }

  fetchData() {
    this.visitedProfile = this._activeRouter.snapshot.paramMap.get('id');
    this._rest.getUser(this.visitedProfile)
      .subscribe(res => {
        this.userProfile = res.user,
        this.posts = res.user.posts,
        this.events = res.user.events;
      },
        err => console.log(err)
      );
  }

  subscribe() {
    this._rest.subscribe(this.loggedInUserId)
      .subscribe(
        res => this.fetchData(),
        err => console.log(err)
      );
  }

}
