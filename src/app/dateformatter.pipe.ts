import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateformatter'
})
export class DateformatterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
