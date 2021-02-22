import { Component, Input, OnInit } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service'

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() cartItem: any;

  constructor(public cartService: CartServiceService) { }

  ngOnInit(): void {
  }
  counter(action: string) {
    switch (action) {
      case 'add': {
        this.cartService.itemUpdate(this.cartItem, 'add');
        break;
      }
      case 'remove': {
        this.cartService.itemUpdate(this.cartItem, 'remove');
        break;
      }
    }
  }
}
