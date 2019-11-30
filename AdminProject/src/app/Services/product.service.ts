import { Injectable } from '@angular/core';
import { Product } from '../ViewModales/product';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient ) { }
  insertProduct(newPrd: Product): Observable <any> {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': ' */*'
  
        })};

    return this.httpClient.post<any>(`${environment.API_URL}Product`, newPrd, httpOptions);
   }
   getAllProduct():Observable<Product[]>
   {

    return this.httpClient.get<Product[]>(`${environment.API_URL}Product`);
   }

   getProductByID(pID: number):Observable<Product>
   {

    return this.httpClient.get<Product>(`${environment.API_URL}Product/${pID}`);
   }

   updateProduct(pID:number,Product:Product):Observable<any>
   {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': ' */*'
        })};
     return this.httpClient.put<any>(`${environment.API_URL}Product/${pID}`,Product,httpOptions);
   }
   DeleteProduct(pID:number):Observable<any>
   {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': ' */*'
        })};
     return this.httpClient.delete<any>(`${environment.API_URL}Product/${pID}`,httpOptions);
   }
}

