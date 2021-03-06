import { Component, OnChanges, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'star-comp',
    templateUrl: './star.component.html',
    styleUrls: [ './star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
}
