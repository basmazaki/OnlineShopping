import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../ViewModales/category';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) {

   }
   getAllCategory(): Observable <Category[]>
   {
     return this.httpClient.get<Category[]>(`${environment.API_URL}Category`);
   }
}
