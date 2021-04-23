import { Component, OnInit } from '@angular/core';
import { Category } from '../models';
import {CATEGORIES} from '../fake-db';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories: Category[] =[];
  cat_id : number = 0;
  
  constructor(private router: Router) { }


  ngOnInit(): void {
    this.categories = CATEGORIES;

  }


}
