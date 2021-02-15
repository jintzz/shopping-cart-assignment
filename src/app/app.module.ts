import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './containers/landing-page/landing-page.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { ProductListPageComponent } from './containers/product-list-page/product-list-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomePageComponent,
    ProductListPageComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    CarouselComponent,
    ProductItemComponent,
    CategoryItemComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
