import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Category,AuthToken,Product} from './models';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }
  
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/categories/`,);
  }

  loginToken(username: string, password: string):Observable<AuthToken>{
    return this.http.post<AuthToken>(`${this.BASE_URL}/login/`, {
      username,
      password
    });
  }
}
