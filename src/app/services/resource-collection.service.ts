import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ResourceCollectionService {

  APIEndPoint = "http://localhost:5000";

  constructor(private http: HttpClient) { }

  getCarouselData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIEndPoint}/banners`);
  }

  getCategoryData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIEndPoint}/categories`);
  }

  getProductList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIEndPoint}/products`);
  }

  addToCart(data: any): Observable<any> {
    return this.http.post<any>(`${this.APIEndPoint}/addToCart`,data)
  }

}
