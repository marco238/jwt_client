import { Component, OnInit } from '@angular/core';

import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css']
})
export class SpecialsComponent implements OnInit {
  specialEvents: any = [];

  constructor(private _eventService: EventsService) { }

  ngOnInit() {
    this._eventService.fetchSpecials()
    .subscribe(
      res => {
        this.specialEvents = res;
      },
      err => console.log(err)
    )
  }
}
