import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/Header.component';
import { FooterComponent } from './Footer/Footer.component';
import { ProductComponent } from './product/product.component';
import {myDiscountPipe} from './product/myDiscount.pipe';
import {ProductSearchPipe}  from './product/ProducSearch.pipe';
import { RatingComponent } from './Shared/Ratings/rating.component';

import {ProductService} from './product/product.service';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component'
import { NotFoundComponent } from './Shared/NotFound.component';
import { ProductDetailsComponent } from './product/product-details.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    FooterComponent, 
    ProductComponent, 
    RatingComponent,
    myDiscountPipe, 
    ProductSearchPipe, 
    HomeComponent, 
    OrderComponent,
    NotFoundComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    RouterModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
