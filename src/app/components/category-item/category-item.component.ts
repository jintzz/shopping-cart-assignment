import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

  constructor() { }
  @Input() item: any;
  @Input() index: any;
  ngOnInit(): void {
    console.log(this.item)
  }

}
