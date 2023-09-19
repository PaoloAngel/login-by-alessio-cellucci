import { Injectable } from '@angular/core';
import { ILogin, ILoginResponse } from '../shared/types/auth.type';
import { Observable, of } from 'rxjs';
import { MLoginResponse } from 'src/assets/mocks/auth.mocks';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public login(login: ILogin): Observable<ILoginResponse> {
    console.log('login with: ', login);
    return of(MLoginResponse);
  }
}
