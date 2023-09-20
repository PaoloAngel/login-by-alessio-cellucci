import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  title = 'login-by-cellucci';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      console.log('Is Logged In');
      this.authService.loginWithStorage();
    }
  }
}
