import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/ViewModales/product';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product:Product;
  constructor( private Activated_Route:ActivatedRoute,private productServices:ProductService,
    private router:Router) { }

  saveProduct(idPrd:number)
  {
    this.productServices.updateProduct(idPrd,this.product).
    subscribe((res)=>{console.log(res)},(err)=>{console.log(err)});

    this.router.navigate(["/ShowProduct"]);
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
