import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { IProduct } from '../models/product';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url = 'api/products';

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) {
  }

  getAllProducts(): Observable<IProduct[]> {
    // // get data from file
    // return this.http.get<IProduct[]>('assets/mockdata/product.json')
    // .pipe(
    //   catchError(err => this.errorService.handleHttpError(err))
    // );

    // get data from memory
    return this.http.get<IProduct[]>(this._url)
    .pipe(
      catchError(err => this.errorService.handleHttpError(err))
    );
  }

  getProduct(productId: number): Observable<IProduct> {
    if ( productId === 0) {
      return of(this.initializeProduct());
    }

    const url = `${this._url}/${productId}`;
    return this.http.get(url)
      .pipe(
        catchError(err => this.errorService.handleHttpError(err))
      );
  }

  deleteProduct(productId: number): Observable<Response> {
    const url = `${this._url}/${productId}`;
    return this.http.delete(url, {responseType: 'text'})
      .pipe(
        map(result => {}),
        catchError((err: HttpErrorResponse)  => this.errorService.handleHttpError(err))
      );
  }

  createProduct(product: IProduct): Observable<IProduct> {
    product.id = undefined;
    console.log(product);
    return this.http.post(this._url, product)
    .pipe(
      catchError(e => this.errorService.handleHttpError(e))
    );
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    const url = `${this._url}/${product.id}`;
    return this.http.put(this._url, product)
    .pipe(
      catchError(e => this.errorService.handleHttpError(e))
    );
  }

  initializeProduct(): IProduct {
    // Return an initialized object
    return {
      id: 0,
      name: null,
      category: null,
      description: null,
      price: null,
    };
  }
}
