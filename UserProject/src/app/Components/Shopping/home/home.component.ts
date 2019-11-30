import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/ViewModels/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ProductList:Product[];
  constructor(private productFromAPI:ProductService)
  {}


  ngOnInit() {
 

    this.productFromAPI.getSomeProduct().subscribe((res)=>{this.ProductList=res;
    },
    (err)=>{console.log(err);
    });
  }

}
