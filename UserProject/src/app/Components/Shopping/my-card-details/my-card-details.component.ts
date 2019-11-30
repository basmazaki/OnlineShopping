import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/ViewModels/product';

@Component({
  selector: 'app-my-card-details',
  templateUrl: './my-card-details.component.html',
  styleUrls: ['./my-card-details.component.css']
})
export class MyCardDetailsComponent implements OnInit {
ProductListFromMyCard:Product[]=[];
  constructor(private productServices:ProductService) { }

  ngOnInit() {
    this.ProductListFromMyCard=this.productServices.getProductFromCart();
    console.log(this.ProductListFromMyCard);

  }

}
