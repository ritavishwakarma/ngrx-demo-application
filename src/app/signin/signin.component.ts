import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Credentials } from '../auth.models';
import * as AuthActions from '../auth.actions';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signForm!: FormGroup;
  err = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
  }
  credentials: Credentials = { usernameOrEmail: '', password: '' };


  signIn() {
    this.store.dispatch(AuthActions.signIn({ credentials: this.credentials }));

  }


}
