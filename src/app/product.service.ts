import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductResponse } from './product';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor() {}
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url!: string;
  constructor(private http: HttpClient) {
    this.url = 'https://dummyjson.com/products';
  }

  getAllProduct(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.url);
  }
}
