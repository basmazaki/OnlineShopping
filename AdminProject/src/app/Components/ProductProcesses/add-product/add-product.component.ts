import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/ViewModales/product';
import { Category } from 'src/app/ViewModales/category';
import { CategoryService } from 'src/app/Services/category.service';
import { Router,ActivatedRoute } from '@angular/router';

import { ProductService } from 'src/app/Services/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
newProduct:Product;
CatList:Category[];

  constructor(private categoryServices:CategoryService, private router: Router,private productServices:ProductService,
    private Activated_Route:ActivatedRoute) {
  
    this.newProduct = new Product(0, 'TestProductFromAngular', 1000);

   }
   /****/
   
   saveProduct() {

    console.log(JSON.stringify(this.newProduct));

    this.productServices.insertProduct(this.newProduct)
    .subscribe(
      (data) => {console.log (JSON.stringify(data)); },
      (err) => {console.log(err);
      });
     

    //this.router.navigate(['/productsFromAPI']);
  }
  ngOnInit() {

 
    
  }

}
