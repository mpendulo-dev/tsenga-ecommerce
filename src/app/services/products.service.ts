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

  getAllProducts(limit = 12, sort = 'desc'): Observable<Product[]> {
    return this.http.get<Product[]>(`${PRODUCTS_URL}/products?sort=${sort}&limit=${limit}`);
  }
}
