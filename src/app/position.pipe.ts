import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'position',
  pure: false
})
export class PositionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
