import { Component, Input, OnInit } from '@angular/core';
import { CartServiceService, cartModel } from '../../services/cart-service.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: any;

  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
  }

  buyItem(product: any) {
    let payload: cartModel = {
      id: product.id,
      item: product.name,
      count: 1,
      imgUrl: product.imageURL,
      price: product.price,
      category: product.category
    }
    this.cartService.addItemToCart(payload);
  }
}
