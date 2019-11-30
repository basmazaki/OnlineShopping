import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/Shopping/home/home.component';
import { ShoppingCardComponent } from './Components/Shopping/shopping-card/shopping-card.component';
import { MyCardDetailsComponent } from './Components/Shopping/my-card-details/my-card-details.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'\home' , pathMatch:'full'},
  {path:'order', component:ShoppingCardComponent},
  {path:'OrderDetails', component:MyCardDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
