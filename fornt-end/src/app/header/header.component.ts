import { Component, OnInit } from '@angular/core';
import { Category,Product } from '../models';
import {CATEGORIES,LOG,PRODUCTS} from '../fake-db';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories: Category[] =[];
  products : Product[] =[];
  cat_id : number = 0;
  loggs = LOG;
  text: string="";
  
  constructor(private router: Router) { }


  ngOnInit(): void {
    this.categories = CATEGORIES;
    this.products = PRODUCTS;

  }

  removeSearch(){
    this.text="";
  }
}
