import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { CartServiceService } from "../../services/cart-service.service";
import { CartModalComponent } from "../../modal/cart-modal/cart-modal.component";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartCount: any;
  cartData: any;
  cartSum: any;
  screenWidth: number = 0;
  screenHeight: number = 0;

  constructor(private cartService: CartServiceService, private router: Router, public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.cartCount = 0;
    this.cartData = [];
    this.cartSum = 0;

    this.loadCart();
    this.cartService.initialLoad();
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.cartService.dispatchScreenSize(this.screenWidth)
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.cartService.dispatchScreenSize(this.screenWidth)
  }
  loadCart() {
    this.cartService.cartStateObs.subscribe(res => {
      if (res && Object.keys(res) && Object.keys(res).length) {
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
    if (this.screenWidth < 1008) {
      this.router.navigate(['/shopping-cart']);
    }
    else {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.height = "calc(100vh - 7rem)";
      dialogConfig.width = "auto";
      dialogConfig.id = "cart-modal";
      dialogConfig.data = {
        cartCount: this.cartCount,
        cartData: this.cartData,
        cartSum: this.cartSum
      };
      dialogConfig.panelClass = "cart-modal-wrapper"
      const modalDialog = this.matDialog.open(CartModalComponent, dialogConfig);
    }
  }
}
