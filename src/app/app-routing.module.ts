import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './containers/landing-page/landing-page.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { ProductListPageComponent } from './containers/product-list-page/product-list-page.component';
import { CartContainerComponent } from './containers/cart-container/cart-container.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LandingPageComponent },
  { path: 'register', component: LandingPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'product-list', component: ProductListPageComponent },
  { path: 'shopping-cart', component: CartContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
