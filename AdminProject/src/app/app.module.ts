import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/LayoutComponent/header/header.component';
import { FooterComponent } from './Components/LayoutComponent/footer/footer.component';
import { ContentComponent } from './Components/LayoutComponent/content/content.component';
import { AddProductComponent } from './Components/ProductProcesses/add-product/add-product.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ShowAllProductFromApiComponent } from './Components/ProductProcesses/show-all-product-from-api/show-all-product-from-api.component';
import { DefaultContentComponent } from './Components/LayoutComponent/default-content/default-content.component';
import { EditProductComponent } from './Components/ProductProcesses/edit-product/edit-product.component';
import { ListProductComponent } from './Components/ProductProcesses/list-product/list-product.component';
import { DeleteProductComponent } from './Components/ProductProcesses/delete-product/delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    AddProductComponent,
    ShowAllProductFromApiComponent,
    DefaultContentComponent,
    EditProductComponent,
    ListProductComponent,
    DeleteProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
