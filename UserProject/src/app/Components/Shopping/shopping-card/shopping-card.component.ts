import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/ViewModels/category';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit {

  CatList:Category[];
  selectedID:number;
  constructor(private categoryService:CategoryService){}
  
  ngOnInit() {
    
    this.categoryService.getAllCategory().subscribe(
      (res)=>{this.CatList=res;},
      (err)=>{console.log(err);
      });
  
  }

}
