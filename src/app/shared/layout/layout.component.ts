import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable, tap } from 'rxjs';
import { IUser } from '../types/user.type';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  public user$: Observable<IUser | null> = this.authService.user$;

  constructor(private authService: AuthService) {}

  onLogout() {
    this.authService.logout();
  }
}
