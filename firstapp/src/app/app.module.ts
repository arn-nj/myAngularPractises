import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/Header.component';
import { FooterComponent } from './Footer/Footer.component';
import { ProductComponent } from './product/product.component';
import {myDiscountPipe} from './product/myDiscount.pipe';
import {ProductSearchPipe}  from './product/ProducSearch.pipe';
import { RatingComponent } from './Shared/Ratings/rating.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    FooterComponent, 
    ProductComponent, 
    RatingComponent,
    myDiscountPipe, 
    ProductSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
