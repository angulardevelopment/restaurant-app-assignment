import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RestaurantDetailsComponent } from './home/restaurant-details/restaurant-details.component';
import { HomeComponent } from './home/home/home.component';
import { FilterComponent } from './home/filter/filter.component';
import { RestaurantsComponent } from './home/restaurants/restaurants.component';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantDetailsComponent,
    HomeComponent,
    FilterComponent,
    RestaurantsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
