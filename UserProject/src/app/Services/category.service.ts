import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getPluralCategory } from '@angular/common/src/i18n/localization';
import { observable, Observable } from 'rxjs';
import { Category } from '../ViewModels/category';
import { environment } from 'src/environments/environment.prod';

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




