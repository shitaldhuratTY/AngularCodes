import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce'
})
export class ReducePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value.length <= length){
      return value;
    }else{
      return value.substr(0, length) + '...';
    }
  }

}
