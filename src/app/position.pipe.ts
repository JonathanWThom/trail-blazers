import { Pipe, PipeTransform } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';

@Pipe({
  name: 'position',
  pure: false
})
export class PositionPipe implements PipeTransform {

  //change to any object types if neccessary

  transform(input: any[], position: string) {
    var output: any[];

    if (position === "Center") {
      input.forEach(function(player) {
        if (player.position === "Center") {
          output.push(player);
        }
      });
      return output;
    } else if (position === "Forward") {
      input.forEach(function(player) {
        if (player.position === "Forward") {
          output.push(player);
        }
      });
      return output;
    } else if (position === "Guard") {
      input.forEach(function(player) {
        if (player.position === "Guard") {
          output.push(player);
        }
      });
      return output;
    } else {
      return input;
    }
  }
}
