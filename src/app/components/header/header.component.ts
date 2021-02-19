import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from "../../services/cart-service.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartCount: any;
  cartData: any;
  cartSum: any;

  constructor(private cartService: CartServiceService, private router: Router) { }

  ngOnInit(): void {
    this.cartCount = 0;
    this.cartData = [];
    this.cartSum = 0;

    this.loadCart();
    this.cartService.initialLoad();
  }
  loadCart() {
    this.cartService.cartStateObs.subscribe(res => {
      if (res && res.count) {
        this.cartCount = res.count;
        this.cartData = res.items;
        this.cartSum = res.cartSum;
      }
      else {
        let sessionData: any = sessionStorage.getItem('cart-data');
        sessionData = JSON.parse(sessionData); 
        if (sessionData && sessionData.count) {
          this.cartCount = sessionData.count;
          this.cartData = sessionData.items;
          this.cartSum = sessionData.cartSum;
        }
      }
    })
  }
  openCart() {
    this.router.navigate(['/shopping-cart']);
  }
}
