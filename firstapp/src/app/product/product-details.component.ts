import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';
import IProduct from './product.model';

@Component({
    selector: 'product-details',
    templateUrl: './product-details.component.html',
    styles: [
        'img{ width:100%;height:100%; }',
        'card-img { width: 400px; height:400px;}',
        '.price { float:right !important; position:relative; margin-right: 10px; position: inherit;}'
    ]
})

export class ProductDetailsComponent implements OnInit {
    
    id:number;
    restaurant:IProduct;
    constructor(private route: ActivatedRoute, private productService: ProductService) { }

    ngOnInit() { 
        this.id = this.route.snapshot.params["id"];
        this.productService.getRestaurantsById(this.id).subscribe(
            (data)=>this.restaurant = data
        )
    }
}