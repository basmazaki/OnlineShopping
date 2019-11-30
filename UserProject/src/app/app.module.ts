import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/LayoutComponents/header/header.component';
import { ContentComponent } from './Components/LayoutComponents/content/content.component';
import { FooterComponent } from './Components/LayoutComponents/footer/footer.component';
import { ShoppingCardComponent } from './Components/Shopping/shopping-card/shopping-card.component';
import { ShoppingCardDetailsComponent } from './Components/Shopping/shopping-card-details/shopping-card-details.component';
import {FormsModule} from '@angular/forms';
import { ProductDetialsComponent } from './Components/Shopping/product-detials/product-detials.component';
import { HomeComponent } from './Components/Shopping/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { MyCardDetailsComponent } from './Components/Shopping/my-card-details/my-card-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ShoppingCardComponent,
    ShoppingCardDetailsComponent,
    ProductDetialsComponent,
    HomeComponent,
    MyCardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
