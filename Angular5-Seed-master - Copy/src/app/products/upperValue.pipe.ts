import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myUpper'
})

// tslint:disable-next-line:class-name
export class upperValuePipe implements PipeTransform {
    transform(value: String, type: string) {
        let out;
        if (type === 'upper') {
            out = value.charAt(0).toUpperCase() + value.slice(1);
        }else {
            out = value.toLowerCase();
        }
        return out;
    }
}
