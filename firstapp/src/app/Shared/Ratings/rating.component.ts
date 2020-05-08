import { Component, Input, Output, OnChanges,EventEmitter } from '@angular/core';


@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.css']
})

export class RatingComponent implements OnChanges {
    
    @Input() rating:number;
    @Output() ratingClick:EventEmitter<string> = new EventEmitter<string>();
    starWidth:number;

    ngOnChanges(): void {
        this.starWidth = 50*this.rating/5;
    }

    starClick():void{
        this.ratingClick.emit(`Clicked Rating is ${this.rating}`);
    }
}