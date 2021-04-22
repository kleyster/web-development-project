import { Component, OnInit } from '@angular/core';
import {Product} from '../models';
import {PRODUCTS} from '..//fake-db';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  product : any;
  cat_id : number = 0;
  constructor(private route: ActivatedRoute,
    private location: Location, private router: Router) { }

  ngOnInit(): void {
    //console.log(PRODUCTS.find((x)=> x.uni_id === 3));
    // this.route.paramMap.subscribe((params)=> {
    // const id =+ Number(params.get('pro_id'));
    // this.product = PRODUCTS.find((x)=> x.uni_id === id);
    // })
    this.cat_id = Number(this.router.url.split("/")[this.router.url.split("/").length-2]);
    const prod_id = Number(this.router.url.split("/")[this.router.url.split("/").length-1]);
    console.log(PRODUCTS.find((x) => x.uni_id === prod_id));
    this.product = PRODUCTS.find((x) => x.uni_id === prod_id);

  }
  }

