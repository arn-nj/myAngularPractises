import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myDiscount'
})

export class myDiscountPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        value = value - (value * args[0])/100;
        return value;
    }
}