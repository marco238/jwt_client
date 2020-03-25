import { Component, OnInit } from '@angular/core';

import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private _fetch: EventsService) { }

  ngOnInit() {
    this._fetch.fetchEvents()
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }
}
