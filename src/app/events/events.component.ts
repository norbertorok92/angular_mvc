import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  @Input() event: any;
  @Output() fetchData: EventEmitter<any> = new EventEmitter();

  userId = Number(localStorage.getItem('loggedIn'));
  constructor(
    private _rest: RestService
  ) { }

  ngOnInit() {
  }

  deleteEvent(eventId) {
    this._rest.deleteEvent(eventId)
      .subscribe(
        res => this.fetchData.emit(),
        err => console.log(err)
      );
  }
}
