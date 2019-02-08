import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts = [];
  events = [];
  commentData = {};
  userId = null;
  userRole = localStorage.getItem('userRole');
  constructor(private _rest: RestService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.commentData = {};
    this.userId = Number(localStorage.getItem('loggedIn'));
    this._rest.getPosts()
      .subscribe(
        res => this.posts = res.posts,
        err => console.log(err)
      );

    this._rest.getEvents()
      .subscribe(
        res => this.events = res.events,
        err => console.log(err)
      );
  }



}
