import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.scss']
})
export class EditPostsComponent implements OnInit {

  @Input() editPostData: any;
  @Output() fetchData: EventEmitter<any> = new EventEmitter();

  postData = {};
  constructor(
    private _rest: RestService
  ) { }

  ngOnInit() {
    this.postData = {...this.editPostData};
  }

  editPost(postId) {
    this._rest.editPost(postId, this.postData)
      .subscribe(res => {
        this.fetchData.emit();
        (<any>window).jQuery(`#editPostModal-${postId}`).modal('hide');
      },
        err => console.log(err)
      );
  }
}
