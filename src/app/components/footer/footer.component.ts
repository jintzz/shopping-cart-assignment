import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavigationEvent } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  showFooter: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      if (res instanceof NavigationEnd) {
        this.showFooter = res.url.includes('shopping-cart') ? false : true;
      }
    });
  }
}
