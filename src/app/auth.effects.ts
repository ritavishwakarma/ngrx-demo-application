import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from './auth.service';
import * as AuthActions from './auth.actions';

import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
//   signIn$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(AuthActions.signIn),
//       switchMap(({ credentials }) =>
//         this.authService.signIn(credentials).pipe(
//           map((user) => AuthActions.signInSuccess({ user })),
//           catchError((error) => of(AuthActions.signInFailure({ error })))
//         )
//       )
//     )
//   );

signIn$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AuthActions.signIn),
    switchMap(({ credentials }) =>
      this.authService.signIn(credentials).pipe(
        map((user) => {
        this.router.navigate(['/user']); // Replace '/user' with the desired route
          return AuthActions.signInSuccess({ user });

        }),
        catchError((error) => of(AuthActions.signInFailure({ error })))
      )
    )
  )
);

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router

  ) {}
}
