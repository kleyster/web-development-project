import { Component, Injectable, OnInit } from '@angular/core';
import {Product} from '../models';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from '../models';
import { ProductService } from '../products.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class ProductsListComponent implements OnInit {
  products : Product[] = [];
  cat_id : number = 0;
  categories: Category[] =[];
  logged : boolean = false;
  constructor(private route: ActivatedRoute,
    private location: Location,private router: Router, private productService : ProductService,
    private login : LoginComponent
    ) { }

  ngOnInit(): void {
    this.getProducts();
    // this.categories = CATEGORIES;
    this.logged=this.login.checkLog();
  }

  logout(){
    this.logged=false;
  }

  getProducts() {
    this.cat_id = Number(this.router.url.split("/")[this.router.url.split("/").length-1]);
    // console.log(this.cat_id);
    // this.products = PRODUCTS.filter((x) => x.cat_id === this.cat_id);
    this.productService.getProducts(this.cat_id).subscribe((data) =>{
      this.products = data;
      
    })
  }
  goToProduct(product:any) {
    //console.log(product);
    this.router.navigate(['categories/' + this.cat_id + '/' + product.id]);
  }
}



//[routerLink]= "['/categories', cat_id, product.uni_id]"