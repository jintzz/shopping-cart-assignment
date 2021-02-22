import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit {
  cartCount: any;
  cartSum: any;
  cartData: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public matData: any,
    private cartService: CartServiceService
  ) { }

  ngOnInit(): void {
    if (this.matData) {
      this.cartCount = this.matData.cartCount,
        this.cartData = this.matData.cartData,
        this.cartSum = this.matData.cartSum
    }
    this.listenCart();
  }
  listenCart() {
    this.cartService.cartStateObs.subscribe(data => {
      if (data && Object.keys(data) && Object.keys(data).length) {
        this.cartData = data.items;
        this.cartSum = data.cartSum;
        this.cartCount = data.count
      }
    })
  }
}
