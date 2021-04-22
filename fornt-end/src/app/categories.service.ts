import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from './models';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  BASE_URL = '';
  constructor(private http: HttpClient) { }
  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.BASE_URL}/categories`);
  }
}
