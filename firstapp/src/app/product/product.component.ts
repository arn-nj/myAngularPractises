import { Component, OnInit } from '@angular/core';
import IProduct from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  styles: [
    '.lucky{ background-color: green;}'
  ]
})
export class ProductComponent implements OnInit {
  title: string = "Restaurant List";
  condition:boolean = true;
  searchText:string;
  mydiscount: number = Math.floor(Math.random()*50-5)+5;
  message: string = this.mydiscount > 25? 'Super Lucky': 'Lucky';
  restaurantList: IProduct[];
  rateMessage:string;
  constructor(private productService : ProductService){

  }
  toggleImage(): void {
    this.condition = ! (this.condition);
  }; 

  ngOnInit():void{
    setTimeout(() => {
      this.loadRestaurant();
    }, 1000);
    
  }

  

  getColor():string {
    return (this.message == 'Lucky')? 'red' : 'green';
  }

  rateClick(msg:string):void{
    console.log(msg)
    this.rateMessage = msg;
  }

  loadRestaurant():void{
   this.productService.getRestaurants().subscribe(
      (data) => this.restaurantList = data
    );
  }
  
}
