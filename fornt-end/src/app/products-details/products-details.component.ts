import { Component, OnInit } from '@angular/core';
import {Product} from '../models';
import {PRODUCTS} from '..//fake-db';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  product !: Product;
  cat_id : number = 0;
  prod_id : number = 0;
  constructor(private route: ActivatedRoute,
    private location: Location, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    //console.log(PRODUCTS.find((x)=> x.uni_id === 3));
    // this.route.paramMap.subscribe((params)=> {
    // const id =+ Number(params.get('pro_id'));
    // this.product = PRODUCTS.find((x)=> x.uni_id === id);
    this.getProduct();
    console.log(this.product);
  }

  getProduct() {
    this.cat_id = Number(this.router.url.split("/")[this.router.url.split("/").length-2]);
    this.prod_id = Number(this.router.url.split("/")[this.router.url.split("/").length-1]);
    //console.log(this.prod_id);
    this.productService.getProduct(this.cat_id, this.prod_id).subscribe((data)=> {
      this.product = data;
      //console.log(data);

    })
  }
  }

