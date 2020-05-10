import { Injectable } from '@angular/core';
import IProduct from './product.model';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})

export class ProductService {
    restUrl:string = "http://localhost:8080/hotels";


    constructor(private client: HttpClient){

    }

    getHotels(): Observable<IProduct[]>{
        return this.client.get<IProduct[]>(this.restUrl);
    }

    getHotelsById(id:number): Observable<IProduct>{
        return this.client.get<IProduct>(`${this.restUrl}/${id}`);
    }
    
}