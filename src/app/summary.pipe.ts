import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform{
    transform(value:String, size?:number){
        if(!value)
            return null;

        let actualSize = (size) ? size : 50;
        return value.substr(0,actualSize) + '...';
    }
}