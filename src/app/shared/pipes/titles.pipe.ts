import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'TitlePipe'})
export class TitlePipe implements PipeTransform {
    transform(value: string){
        if(value.length > 19){
            return `${value.substr(0, 18)}...`;
        }else
            return value
    }
}