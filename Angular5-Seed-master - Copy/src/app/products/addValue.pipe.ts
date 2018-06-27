import { Pipe , PipeTransform } from '@angular/core';
import { IProduct } from './product.model';

@Pipe({
    name: 'addVal'
})

// tslint:disable-next-line:class-name
export class addValuePipe implements PipeTransform {
    transform(value: number) {
        if (value < 20) {
            value = value + 10;

        }
        return value;
    }
}
