import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: './product_detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    title: String = 'Detail Page';
    id: Number;

    constructor(private _route: ActivatedRoute) {}

    ngOnInit(): void {
        this.id = +this._route.snapshot.params['id'];
    }

}
