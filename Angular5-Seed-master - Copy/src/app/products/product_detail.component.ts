import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
    templateUrl: './product_detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    title: String = 'Detail Page';
    id: Number;
    name: string;
    desc: string;
    img: string;


    constructor(private _route: ActivatedRoute,
                private _router: Router) {}

    ngOnInit(): void {
        this.id = +this._route.snapshot.params['id'];

        this._route
            .queryParams
            .subscribe((params) => {
                this.name = params['name'];
                this.desc = params['desc'];
                this.img = params['image'];
            });
    }

    onList(): void {
        this._router.navigate(['/product']);
    }

}
