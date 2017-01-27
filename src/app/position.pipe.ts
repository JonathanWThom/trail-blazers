import { Pipe, PipeTransform } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';

@Pipe({
  name: 'position',
  pure: false
})

export class PositionPipe implements PipeTransform {

  transform(input: any[], selectedPosition: string) {
    var output: any[] = [];

    if (selectedPosition === "Center") {
      input.forEach(function(player) {
        if (player.position === "Center") {
          output.push(player);
        }
      });
      return output;
    } else if (selectedPosition === "Forward") {
      input.forEach(function(player) {
        if (player.position === "Forward") {
          output.push(player);
        }
      });
      return output;
    } else if (selectedPosition === "Guard") {
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
