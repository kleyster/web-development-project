import { Component, OnInit } from '@angular/core';
import {Product} from '../models';
import {PRODUCTS} from '..//fake-db';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products : Product[] = [];
  cat_id : number = 0;

  constructor(private route: ActivatedRoute,
    private location: Location,private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.cat_id = Number(this.router.url.split("/")[this.router.url.split("/").length-1]);
    //console.log(this.cat_id);
    this.products = PRODUCTS.filter((x) => x.cat_id === this.cat_id);
  }
  
}
