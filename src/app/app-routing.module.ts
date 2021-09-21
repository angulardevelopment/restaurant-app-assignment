import { FilterComponent } from './home/filter/filter.component';
import { RestaurantsComponent } from './home/restaurants/restaurants.component';
import { HomeComponent } from './home/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantDetailsComponent } from './home/restaurant-details/restaurant-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', component: RestaurantsComponent },
    { path: 'restaurantDetails/:id', component: RestaurantDetailsComponent },
    { path: 'filter', component: FilterComponent },
    { path: '**', component: PagenotfoundComponent }

  ] },
  // { path: 'restaurantDetails/:id', component: RestaurantDetailsComponent },
  // { path: 'restaurants', component: RestaurantsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
