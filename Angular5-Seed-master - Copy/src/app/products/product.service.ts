import { Injectable } from '@angular/core';
import { IProduct } from './product.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class ProductSevice {

    private _productUrl= 'https://ngapi4.herokuapp.com/api/getProducts';

    constructor(private _http: Http) {}

    getProducts(): Observable<IProduct[]> {

        return this._http.get(this._productUrl)
                   .map((data: Response) => <IProduct[]> data.json())
                   .catch(this.handleError);

    }


    private handleError(error: Response) {
        return Observable.throw(error.statusText || 'Server error');
    }

}
