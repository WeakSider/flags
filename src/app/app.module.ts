import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    NavbarComponent,
    SearchbarComponent,
    CountryDetailComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, MatIconModule, BrowserAnimationsModule, AppRoutingModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
