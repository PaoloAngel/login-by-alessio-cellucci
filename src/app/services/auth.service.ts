import { Injectable } from '@angular/core';
import { ILogin, ILoginResponse } from '../shared/types/auth.type';
import { BehaviorSubject, Observable, Subject, of, tap } from 'rxjs';
import { MLoginResponse } from 'src/assets/mocks/auth.mocks';
import { IUser } from '../shared/types/user.type';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { AppRoutes } from '../app.routing';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  // Creates a Subject named user$ to multicast IUser type data to multiple subscribers
  public user$: BehaviorSubject<IUser | null> =
    new BehaviorSubject<IUser | null>(null);

  public login(login: ILogin): Observable<ILoginResponse> {
    return of(MLoginResponse).pipe(
      tap((response) => {
        console.log(response);
        this.user$.next(this.decodeToken(response.jwt));
      })
    );
  }
  // LOGIN LOCAL STORAGE: Retrieve token save in local storage:
  public loginWithStorage(): void {
    const token: string = localStorage.getItem('token') as string;
    const decoded: IUser = this.decodeToken(token);
    this.user$.next(decoded);
  }

  // DECODE TOKEN: Return the data | DisplayName, Name, Surname
  private decodeToken(token: string): IUser {
    const jwtHelper: JwtHelperService = new JwtHelperService();
    console.log(jwtHelper.decodeToken(token) as IUser);
    return jwtHelper.decodeToken(token) as IUser;
  }

  // LOGGED OUT
  public logout(): void {
    localStorage.clear();
    this.router.navigate([AppRoutes.LOGIN]);
  }

  // KEEP LOGGED: Retrieve token from Local Storage | BEST PRACTICE is using the * GUARDS *
  public isLoggedIn(): boolean {
    return !localStorage.getItem('token');
  }
}
