import { createAction, props } from '@ngrx/store';
import { Credentials } from './auth.models';

export const signIn = createAction(
  '[Auth] Sign In',
  props<{ credentials: Credentials }>()
);

export const signInSuccess = createAction(
  '[Auth] Sign In Success',
  props<{ user: any }>()
);

export const signInFailure = createAction(
  '[Auth] Sign In Failure',
  props<{ error: any }>()
);
