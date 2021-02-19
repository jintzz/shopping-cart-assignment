import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  route = '';
  loginPage = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.router.url.includes('login')) this.route = "login";
    else if (this.router.url.includes('register')) this.route = "register";
    this.loginPage = this.route == "login" ? true : false;
  }
}
