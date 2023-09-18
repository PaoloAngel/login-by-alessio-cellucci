import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

export enum AppRoutes {
  LOGIN = 'login',
  HOME = 'home',
}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutes.LOGIN,
  },
  {
    path: AppRoutes.HOME,
    component: HomeComponent,
  },
  {
    path: AppRoutes.LOGIN,
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: AppRoutes.LOGIN,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
