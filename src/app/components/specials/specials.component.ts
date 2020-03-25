import { Component, OnInit } from '@angular/core';

import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css']
})
export class SpecialsComponent implements OnInit {

  constructor(private _fetch: EventsService) { }

  ngOnInit() {
    this._fetch.fetchSpecials()
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
