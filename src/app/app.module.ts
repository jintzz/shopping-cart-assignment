import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './containers/landing-page/landing-page.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { ProductListPageComponent } from './containers/product-list-page/product-list-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShoppingCartItemComponent } from './components/shopping-cart-item/shopping-cart-item.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlterSourcePipe } from './pipes/alter-source.pipe';
import { CartContainerComponent } from './containers/cart-container/cart-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomePageComponent,
    ProductListPageComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartItemComponent,
    CarouselComponent,
    ProductItemComponent,
    CategoryItemComponent,
    LoginFormComponent,
    AlterSourcePipe,
    CartContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
