import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable()

// tslint:disable-next-line:one-line
export class RouterGaurds implements CanActivate{

    constructor(private _router: Router) {

    }
    // tslint:disable-next-line:one-line
    canActivate(route: ActivatedRouteSnapshot): boolean{
        let id = +route.url[1].path;
        // tslint:disable-next-line:one-line
        if (isNaN(id) || id < 1){
            alert('invalid URL');
            this._router.navigate(['/product']);
            return false;

        }
        return true;
    }
}
