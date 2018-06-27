import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name:'myUpper'
})

export class upperValuePipe implements PipeTransform{
    transform(value:string,type:string){
        var out;
        if(type=="upper"){
            out = value.charAt(0).toUpperCase() + value.slice(1)
        }else{
            out = value.toLowerCase()
        }
        return out
    }
}