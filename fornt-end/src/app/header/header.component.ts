import { Component, OnInit } from '@angular/core';
import { Category } from '../models';
import {CATEGORIES} from '../fake-db';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories: Category[] =[];


  constructor() { }

  ngOnInit(): void {
    this.categories = CATEGORIES;
  }


}
