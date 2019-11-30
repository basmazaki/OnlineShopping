import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/ViewModales/product';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  product:Product;
  constructor( private Activated_Route:ActivatedRoute,private productServices:ProductService,
    private router:Route) { }

    saveProduct(idPrd:number)
  {
    this.productServices.DeleteProduct(idPrd).
    subscribe((res)=>{console.log(res)},(err)=>{console.log(err)});

  
  }
  ngOnInit() {

    const selectedProduct = this.Activated_Route.snapshot.params['id'];

    this.productServices.getProductByID(selectedProduct).subscribe((res)=>{
      this.product=res;
    },(err)=>{console.log(err)});
    
  }
  private getProduct(id:number)
  {
this.productServices.getProductByID(id);
  }
  
}
