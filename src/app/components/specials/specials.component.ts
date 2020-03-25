import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css']
})
export class SpecialsComponent implements OnInit {
  specialEvents: any = [];

  constructor(private _eventService: EventsService, private _router: Router) { }

  ngOnInit() {
    this._eventService.fetchSpecials()
    .subscribe(
      res => {
        this.specialEvents = res;
      },
      err => {
        if(err instanceof HttpErrorResponse && err.status === 401) {
          this._router.navigate(['/login']);
        }
      }
    )
  }
}
