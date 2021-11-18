import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductDto} from './product.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) {}

  getAll(): Observable<ProductDto[]> {
    return this._http.get<ProductDto[]>(`${environment.api}/product`);
  }

  getProduct(id: number): Observable<ProductDto> {
    return this._http.get<ProductDto>(`${environment.api}/product/${id}`)
  }

  createProduct(product: ProductDto) {
    return this._http.post<ProductDto>(environment.api + '/product',product);
  }

  deleteProduct(product: ProductDto) {
    return this._http.delete<ProductDto>(environment.api + '/product/' + product.id);
  }

  updateProduct(product: ProductDto): Observable<ProductDto> {
    return this._http.put<ProductDto>(environment.api + '/product/' + product.id, product);
  }
}
