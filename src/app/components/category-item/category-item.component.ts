import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {
  displayTemplate: any = '';
  constructor() { }
  @Input() item: any;
  @Input() index: any;

  ngOnInit(): void {
  }
  getContent() {
    if (this.index % 2 === 0) {
      return (this.displayImage(), this.displayContent());
    }
    else {
      return (this.displayContent(), this.displayImage());
    }
  }
  displayImage() {
    return (
      `<aside class= "imgContainer"[ngClass] = "{'even-item':index % 2 === 0, 'odd-item' :index % 2 === 1}" >
      <figure>
      <img[src]="item.imageUrl | alterSource" alt = "item.name" >
        </figure>
        < /aside>`
    )
  }
  displayContent() {
    return (
      `<section class="infoContainer"  [ngClass]="{'even-item':index % 2 === 1, 'odd-item' :index % 2 === 0}">
        <h2> {{item.name}}</h2>
        <p>{{item.description}}</p>

        <button routerLink="/product-list" type="button"S>
            Explore {{ item.name | lowercase}}
        </button>
    </section>`
    )
  }
}
