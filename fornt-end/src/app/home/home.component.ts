import { Component, OnInit } from '@angular/core';
import { Category } from '../models';
import {CATEGORIES} from '../fake-db';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: Category[] =[];
  constructor() { }

  ngOnInit(): void {
    this.categories = CATEGORIES;
  }

}
