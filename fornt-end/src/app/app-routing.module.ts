import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import {HomeComponent} from './home/home.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsListComponent } from './products-list/products-list.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories/:id', component: ProductsListComponent},
  {path: 'categories/:id/:pro_id', component: ProductsDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
