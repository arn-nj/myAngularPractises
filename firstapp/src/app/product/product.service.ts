import { Injectable } from '@angular/core';
import IProduct from './product.model';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})

export class ProductService {
    restUrl:string = "http://localhost:8080/restaurants";


    constructor(private client: HttpClient){

    }

    getRestaurants(): Observable<IProduct[]>{
        return this.client.get<IProduct[]>(this.restUrl);
    }

    getRestaurantsById(id:number): Observable<IProduct>{
        return this.client.get<IProduct>(`${this.restUrl}/${id}`);
    }
    
}