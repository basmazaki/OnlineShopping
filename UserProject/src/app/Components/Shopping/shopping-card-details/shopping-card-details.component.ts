import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/ViewModels/product';
import { ProductService } from 'src/app/Services/product.service';
import { IAlert } from 'src/app/ViewModels/ialert';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-shopping-card-details',
  templateUrl: './shopping-card-details.component.html',
  styleUrls: ['./shopping-card-details.component.css']
})
export class ShoppingCardDetailsComponent implements OnInit,OnChanges {

  PrdList:Product[];
  productAddedTocart:Product[];
  public alerts: Array<IAlert> = [];
  cartItemCount: number = 0;
  @Input() CategoryOfSelected:number; 
  PrdListFromCat:Product[];
  
    constructor(private prdservices:ProductService,
      private sharedservices:SharedService) {
      this.CategoryOfSelected=1;
     }
  
    
    ngOnChanges(changes:SimpleChanges) {
      return this.prdservices.getSomeProductByCatIDSelected(this.CategoryOfSelected).subscribe(
        (res)=>{this.PrdListFromCat=res;},
        (err)=>{console.log(err);}
      );
  
    }

  ngOnInit() {
  }
  //card
  
  OnAddCard(prd:Product){

    console.log(prd);
    this.productAddedTocart=this.prdservices.getProductFromCart();
    if(this.productAddedTocart==null)
    {
      this.productAddedTocart=[];
      this.productAddedTocart.push(prd);
      this.prdservices.addProductToCart(this.productAddedTocart);
      this.alerts.push({
        id: 1,
        type: 'success',
        message: 'Product added to cart.'
      });
      setTimeout(()=>{   
        this.closeAlert(this.alerts);
     }, 3000);
    }
        else
        {
          let tempProduct=this.productAddedTocart.find(p=>p.ID==prd.ID);
          if(tempProduct==null)
          {
            this.productAddedTocart.push(prd);
          this.prdservices.addProductToCart(this.productAddedTocart);
          this.alerts.push({
            id: 1,
            type: 'success',
            message: 'Product added to cart.'
          });
          //setTimeout(function(){ }, 2000);
          setTimeout(()=>{   
            this.closeAlert(this.alerts);
       }, 3000);


          }
          else
          {
            this.alerts.push({
              id: 2,
              type: 'warning',
              message: 'Product already exist in cart.'
            });
            setTimeout(()=>{   
              this.closeAlert(this.alerts);
         }, 3000);
          }
           
        }
        this.cartItemCount=this.productAddedTocart.length;
        this.sharedservices.updateCartCount(this.cartItemCount);
      }
      public closeAlert(alert:any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);

  }

}
