import { Injectable } from '@angular/core';
import { ResourceCollectionService } from './resource-collection.service';
import { BehaviorSubject } from 'rxjs';

export interface cartModel {
  id: string;
  item: string;
  imgUrl: string;
  count: number;
  price: any;
  category: string;
  itemTotalCost?: any;
}

@Injectable({
  providedIn: 'root'
})

export class CartServiceService {
  cartData: cartModel[] = [];
  cartCount: number = 0;
  cartPrice: any;
  private cartState = new BehaviorSubject<any>({});
  cartStateObs = this.cartState.asObservable();
  constructor(private dataService: ResourceCollectionService) { }

  addItemToCart(data: cartModel) {
    this.dataService.addToCart({ id: data.id }).subscribe(res => {
      if (res && res.response == "Success") {
        this.modifyCart(data);
      }
    });
    this.modifyCart(data); // remove once cors issue is resolved
  }
  modifyCart(item: any) {
    if (!this.cartData.length) {
      item = {
        ...item,
        itemTotalCost: item.count * item.price
      }
      this.cartData.push(item);
    }
    else {
      let itemPresent = false;
      this.cartData.forEach(data => {
        if (data.id === item.id && data.category === item.category) {
          data.count = data.count + 1;
          itemPresent = true;
          data.itemTotalCost = data.count * data.price
        }
      });
      if (!itemPresent) this.cartData.push(item);
    }
    this.updateCount()
  }

  updateCount() {
    let currentCount = 0;
    let cartPrice = 0;
    if (this.cartData && this.cartData.length) {
      this.cartData.forEach(item => {
        currentCount = currentCount + item.count;
        cartPrice = cartPrice + (item.count * item.price);
        item.itemTotalCost = item.count * item.price;
      });
    }
    this.cartCount = currentCount;
    this.cartPrice = cartPrice;
    this.dispatchCartData();
  }

  dispatchCartData() {
    const payload = {
      items: this.cartData,
      count: this.cartCount,
      cartSum: this.cartPrice
    }
    this.cartState.next(payload);
    sessionStorage.setItem('cart-data', JSON.stringify(payload));
  }
  initialLoad() {
    let payload: any = sessionStorage.getItem('cart-data');
    payload = JSON.parse(payload);
    if (payload && payload.count > 0) {
      this.cartData = payload.items;
      this.cartCount = payload.count;
      this.cartPrice = payload.cartSum;
      this.cartState.next(payload);
    }
  }
  itemUpdate(item: any, action: string) {
    this.cartData.forEach(data => {
      if (data.id === item.id && data.category === item.category) {
        if (action === "add") {
          data.count = data.count + 1;
        }
        else if (action === "remove") {
          data.count = data.count > 0 ? data.count - 1 : 0;
        }
      }
    });
    this.cartData = this.cartData.filter(cartItem => cartItem.count > 0);
    this.updateCount();
  }
}
