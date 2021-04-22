import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { CategoriesDetailComponent } from './categories-detail/categories-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
    CategoriesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }