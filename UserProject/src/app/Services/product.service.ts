import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from '../ViewModels/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getAllProduct(): Observable <Product[]>
  {
    return this.httpClient.get<Product[]>(`${environment.API_URL}Product`);
  }

  getProductByID(prdID:number): Observable <Product>
  {
    return this.httpClient.get<Product>(`${environment.API_URL}Product/${prdID}`);
  }
//return this.httpClient.get<Product[]>();
getSomeProduct():Observable<Product[]>
{
  return this.httpClient.get<Product[]>(`${environment.API_URL2}ShowSomeProduct`);
}
getSomeProductByCatIDSelected(CatID:number):Observable<Product[]>
{
  return this.httpClient.get<Product[]>(`${environment.API_URL2}ShowProductByCatID/${CatID}`);
}


//card
addProductToCart(prodcuts: any) {
  localStorage.setItem("product", JSON.stringify(prodcuts));
}
getProductFromCart() {
  //return localStorage.getItem("product");
  return JSON.parse(localStorage.getItem('product'));
}
removeAllProductFromCart() {
  return localStorage.removeItem("product");
}
errorHandler(error: Response) {  
  console.log(error);  
  return throwError(error);  
} 
  }

