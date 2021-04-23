import { Component, OnInit } from '@angular/core';
import {PRODUCTS} from '..//fake-db';
import {Product} from '../models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
    product_name = '';

  constructor() { }

  ngOnInit(): void {
  }
    find() {
      console.log(this.product_name);
    }

}
