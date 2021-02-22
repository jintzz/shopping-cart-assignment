import { Component, Input, OnInit } from '@angular/core';
import { ResourceCollectionService } from '../../services/resource-collection.service';
import { CartServiceService } from '../../services/cart-service.service';
@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {

  constructor(private dataService: ResourceCollectionService, private cartService: CartServiceService) { }
  categoryTitle = "Select category";
  defaultTitle = "Select category";
  productListArray: any = [];
  filteredList: any = [];
  categoryItem: any = [];
  selectedCategory: string = '';
  isMobile = false;
  ngOnInit(): void {
    this.fetchProductList();
    this.fetchCategoryData();
    this.getScreenSize();
  }

  getScreenSize() {
    this.cartService.cartStateObs.subscribe(size => {
      if (size && size < 641) {
        this.isMobile = true;
      }
    })
  }
  fetchProductList() {
    this.dataService.getProductList().subscribe(data => {
      if (data) this.productListArray = data;
      this.filteredList = data;
    })
  }

  fetchCategoryData() {
    this.dataService.getCategoryData().subscribe(data => {
      if (data) this.categoryItem = data.filter(item => item.enabled);
    })
  }

  filterCategory(id: string, name: string) {
    if (this.selectedCategory && this.selectedCategory === id) {
      this.filteredList = this.productListArray;
      this.selectedCategory = "";
      this.categoryTitle = this.defaultTitle;
    }
    else if (!this.selectedCategory || (this.selectedCategory && this.selectedCategory !== id)) {
      this.filteredList = this.productListArray.filter((item: any) => item.category === id);
      this.selectedCategory = id;
      this.categoryTitle = name;
    }
  }
}
