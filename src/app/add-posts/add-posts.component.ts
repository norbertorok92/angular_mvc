import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.scss']
})
export class AddPostsComponent implements OnInit {

  @Output() fetchData: EventEmitter<any> = new EventEmitter();
  createPostData = {
    code_snippet: ''
  };

  constructor(private _rest: RestService) { }

  ngOnInit() {
  }

  addPost() {
    this._rest.addPost(this.createPostData)
      .subscribe(res => {
        this.createPostData = {code_snippet: ''},
        this.fetchData.emit();
      },
        err => console.log(err)
      );
  }

}
