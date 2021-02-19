import { Component, OnInit } from '@angular/core';
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

  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.cartCount = 0;
    this.cartData = [];
    this.cartSum = 0;

    console.log(this.cartCount);
    this.loadCart();
  }
  loadCart() {
    this.cartService.cartStateObs.subscribe(res => {
      if (res && res.count) {
        console.log(res);
        this.cartCount = res.count;
        this.cartData = res.items;
        this.cartSum = res.cartSum;
      }
    })
  }
}
