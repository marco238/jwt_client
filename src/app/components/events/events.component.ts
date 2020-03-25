import { Component, OnInit } from '@angular/core';

import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any = [];

  constructor(private _eventService: EventsService) { }

  ngOnInit() {
    this._eventService.fetchEvents()
      .subscribe(
        res => {
          this.events = res;
        },
        err => console.log(err)
      )
  }
}
