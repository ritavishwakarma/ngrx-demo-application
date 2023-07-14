import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(private httpclient: HttpClient) {}
    // private ApiURL: string = 'http://localhost:3011';
    private ApiURL: string = 'https://dev-api.aims-core.penpenny.xyz'

  signIn(credentials: { usernameOrEmail: string, password: string }): Observable<any> {
    return this.httpclient.post<Credential>(`${this.ApiURL}/auth/signin`, JSON.stringify(credentials), {
        headers: { 'Content-Type': 'application/json' }
      });  
  }
}
