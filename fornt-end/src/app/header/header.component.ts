import { Component, Injectable, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { Category,Product } from '../models';
import {CATEGORIES,LOG,PRODUCTS} from '../fake-db';
import { Router } from '@angular/router';
import { CategoryService } from '../categories.service';
import { LoginComponent } from '../login/login.component';
import { ProductsListComponent } from '../products-list/products-list.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class HeaderComponent implements OnInit {
  categories: Category[] =[];
  products : Product[] =[];
  cat_id : number = 0;
  loggs :boolean=false;
  text: string="";
  
  constructor(private router: Router,
    private categoryservice: CategoryService,
    private logincomponent:LoginComponent,
    private plist : ProductsListComponent
    ) { }


  ngOnInit(): void {
    this.getCategories();
    this.loggs = this.logincomponent.checkLog();
    console.log(this.loggs);
  }



  removeSearch(){
    this.text="";
  }
  getCategories(){
    this.categoryservice.getCategories().subscribe( (data)=>{
      this.categories=CATEGORIES;
    });
    this.categories=CATEGORIES;
    
  }

  logout(){
    this.logincomponent.logout();
    this.loggs = false;
    this.plist.logout();
  }
}