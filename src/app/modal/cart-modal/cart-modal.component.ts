import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    @Inject(MAT_DIALOG_DATA) public matData: any
  ) { }

  ngOnInit(): void {
    console.log(this.matData)
    if(this.matData){
      this.cartCount = this.matData.cartCount,
      this.cartData = this.matData.cartData,
      this.cartSum = this.matData.cartSum
    }
  }

}
