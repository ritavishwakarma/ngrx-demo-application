import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { authReducer } from './auth.reducer';
import { AuthEffects } from './auth.effects';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects]),
    HttpClientModule

  ],
  providers: [
    AuthService // Add this line to provide the AuthService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
