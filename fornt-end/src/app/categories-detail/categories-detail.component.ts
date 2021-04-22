import { Component, OnInit } from '@angular/core';
import {Category} from '../models';
import {CATEGORIES} from '..//fake-db';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-categories-detail',
  templateUrl: './categories-detail.component.html',
  styleUrls: ['./categories-detail.component.css']
})
export class CategoriesDetailComponent implements OnInit {
  category !: Category | undefined

  constructor(
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=> {
      const id =+ Number(params.get('id'));
      this.category = CATEGORIES.find((x)=> x.id === id);
    })
  }

  goBack(): void {
    this.location.back();
  }

}
