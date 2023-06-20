import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';


const PRODUCTS_URL = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  
  constructor(private http: HttpClient) { }

  //category is optional
  getAllProducts(limit = 12, sort = 'desc', category?: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${PRODUCTS_URL}/products${
      category? '/category/' + category : ''
    }?sort=${sort}&limit=${limit}`);
  }
  getAllCategories(): Observable<Array<string>> {
    return this.http.get<Array<string>>(`${PRODUCTS_URL}/products/categories`);
  }
}
