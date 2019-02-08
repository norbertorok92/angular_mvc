import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() post: any;
  @Output() fetchData: EventEmitter<any> = new EventEmitter();

  commentData = {};
  userId = Number(localStorage.getItem('loggedIn'));
  userRole = localStorage.getItem('userRole');

  constructor(private _rest: RestService) { }

  ngOnInit() {
  }

  fetchAllData() {
    this.fetchData.emit();
  }

  addComment(postId) {
    this._rest.addComment(postId, this.commentData).subscribe(
        res => this.fetchData.emit(),
        err => console.log(err),
      );
  }

  deleteComment(commentId) {
    this._rest.deleteComment(commentId).subscribe(
        res => this.fetchData.emit(),
        err => console.log(err),
      );
  }

  deletePost(postId) {
    this._rest.deletePost(postId).subscribe(
      res => this.fetchData.emit(),
      err => console.log(err),
    );
  }

}
