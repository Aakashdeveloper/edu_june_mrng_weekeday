import { Component, OnInit } from '@angular/core';
import { ProductSevice } from './product.service';
import { IProduct } from './product.model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'prod-Comp',
    templateUrl: './products.component.html',
    // styles:['thead{color:green}','h3{color:yellow}']
    styleUrls: ['./products.component.css']
})

export class ProductComponent implements OnInit {
    title: String= '@@@@@@Product List@@@@@';
    showtable: Boolean= true;
    showImage: Boolean= false;
    filterData: String;
    imageWidth: Number= 50;
    errorMessage: String;
    products: IProduct[];

    constructor(private _productService: ProductSevice) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe((data) => this.products = data,
            (err) => this.errorMessage = err);
    }
}


/*
string
number
boolean


one way binding
--Data Binding    {{}}
--Property Binding []
--Event Binding    ()
two way binding   [()]
*/
