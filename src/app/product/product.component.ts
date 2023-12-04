import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { ProductService } from '../product.service';
import { Product, ProductResponse } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  constructor(private productSrv: ProductService) {}

  ngOnInit(): void {}
}
