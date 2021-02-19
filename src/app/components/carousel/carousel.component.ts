import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { ResourceCollectionService } from '../../services/resource-collection.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig],

  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit {

  constructor(private dataService: ResourceCollectionService, config: NgbCarouselConfig) {
  }

  carouselItem: any = [];
  
  ngOnInit(): void {
    this.fetchCarouselData();
  }

  fetchCarouselData() {
    this.dataService.getCarouselData().subscribe(data => {
      if (data) this.carouselItem = data;
    })
  }
}
