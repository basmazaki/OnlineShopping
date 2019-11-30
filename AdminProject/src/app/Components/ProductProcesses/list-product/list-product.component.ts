import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/ViewModales/product';
import{Router} from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
ProductList:Product[];
  constructor(private productServices:ProductService,private router:Router) { }

  ngOnInit() {
    return this.productServices.getAllProduct().subscribe(
      (res)=>{this.ProductList=res;},
      (err)=>{console.log(err);}
    );
  }

  EditProduct(productID:number){

this.router.navigate(['/Edit',productID]);
  }

}
