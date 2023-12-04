import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ProductComponent } from './product/product.component';

const routes: Route[] = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'favourites',
    component: FavouritesComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    HomepageComponent,
    FavouritesComponent,
    ProductComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
