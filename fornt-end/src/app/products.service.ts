import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from './models';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = 'http://localhost:8000';
  constructor(private http: HttpClient) { }
  getProducts(id:number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BASE_URL}/categories/${id}`);
  }

  getProduct(id:number, uni_id:number): Observable<Product>{
    return this.http.get<Product>(`${this.BASE_URL}/categories/${id}/${uni_id}`);
  }
}
