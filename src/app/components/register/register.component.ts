import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData: User = {
    email: '',
    password: ''
  };
  constructor() { }

  ngOnInit() {
  }

  _registerUser() {
    console.log(this.registerUserData);
  }
}
