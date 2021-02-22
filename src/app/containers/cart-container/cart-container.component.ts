import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss']
})
export class CartContainerComponent implements OnInit {
  itemsInCart: any[] = [];
  totalPrice: any = 0;
  count: any = 0;
  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.listenCart();
  }

  listenCart() {
    this.cartService.cartStateObs.subscribe(data => {
      if (data && Object.keys(data) && Object.keys(data).length) {
        this.itemsInCart = data.items;
        this.totalPrice = data.cartSum;
        this.count = data.count
      }
    })
  }
}
