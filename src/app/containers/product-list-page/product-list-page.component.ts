import { Component, Input, OnInit } from '@angular/core';
import { ResourceCollectionService } from '../../services/resource-collection.service';
@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {

  constructor(private dataService: ResourceCollectionService) { }
  productListArray: any = [];
  filteredList: any = [];
  categoryItem: any = [];
  selectedCategory: string = '';
  ngOnInit(): void {
    this.fetchProductList();
    this.fetchCategoryData();
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

  filterCategory(id: string) {
    if (this.selectedCategory && this.selectedCategory === id) {
      this.filteredList = this.productListArray;
      this.selectedCategory = "";
    }
    else if (!this.selectedCategory || (this.selectedCategory && this.selectedCategory !== id)) {
      this.filteredList = this.productListArray.filter((item: any) => item.category === id);
      this.selectedCategory = id;
    }
  }
}
