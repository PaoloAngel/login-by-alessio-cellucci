import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app.routing';
import { LayoutComponent } from './shared/layout/layout.component';
import { SuppliersComponent } from './pages/suppliers/suppliers.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, LayoutComponent, SuppliersComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
