import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './Components/ProductProcesses/add-product/add-product.component';
import { DefaultContentComponent } from './Components/LayoutComponent/default-content/default-content.component';
import { EditProductComponent } from './Components/ProductProcesses/edit-product/edit-product.component';
import { ListProductComponent } from './Components/ProductProcesses/list-product/list-product.component';
import { DeleteProductComponent } from './Components/ProductProcesses/delete-product/delete-product.component';

const routes: Routes = [
  {path:'Add' ,component:AddProductComponent},
  {path:'defaultContent', component:DefaultContentComponent},
  {path:'Edit/:id', component:EditProductComponent},
  {path:'ShowProduct', component:ListProductComponent},
  {path:'Delete/:id', component:DeleteProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
