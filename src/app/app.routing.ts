import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { SuppliersComponent } from './pages/suppliers/suppliers.component';

export enum AppRoutes {
  EMPTY = '',
  LOGIN = 'login',
  HOME = 'home',
  SUPPLIERS = 'suppliers',
}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutes.HOME,
  },
  {
    path: AppRoutes.LOGIN,
    component: LoginComponent,
  },
  {
    path: AppRoutes.EMPTY,
    component: LayoutComponent,
    children: [
      { path: AppRoutes.HOME, component: HomeComponent },
      { path: AppRoutes.SUPPLIERS, component: SuppliersComponent },
    ],
  },
  {
    path: '**',
    redirectTo: AppRoutes.HOME,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
