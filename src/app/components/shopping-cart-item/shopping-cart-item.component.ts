import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() cartItem: any;

  constructor() { }

  ngOnInit(): void {
  }
  counter(action: string) {
    switch (action) {
      case 'add': {

      }
    }
  }
}
