import { Pipe, PipeTransform } from '@angular/core';
import  IProduct from './product.model'
@Pipe({
    name: 'searchRestaurant'
})

export class ProductSearchPipe implements PipeTransform {
    transform(value: IProduct[], searchText: string): IProduct[] {
        searchText = searchText ? searchText.toLocaleLowerCase():null;
        return searchText? value.filter((data) =>
        data.name.toLocaleLowerCase().indexOf(searchText) !== -1) 
        : value;
    }
}