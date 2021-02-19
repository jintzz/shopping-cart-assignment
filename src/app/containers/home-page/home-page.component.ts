import { Component, OnInit } from '@angular/core';
import { ResourceCollectionService } from '../../services/resource-collection.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private dataService: ResourceCollectionService,) { }

  categoryItem: any = [];
  ngOnInit(): void {
    this.fetchCategoryData();
  }

  fetchCategoryData() {
    this.dataService.getCategoryData().subscribe(data => {
      console.log(data)
      if (data) this.categoryItem = data.filter(item => item.enabled);
    })
  }
}
