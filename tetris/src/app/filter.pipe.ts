import { Pipe, PipeTransform } from '@angular/core';
import { historyList } from './game/game.component';

@Pipe({
  name: 'filter',
})

export class FilterPipe implements PipeTransform {
  
  transform(value: Array<historyList>,selectedOption: string): Array<historyList> {
    if (selectedOption === 'All') {
      return value
    } else {
    let filteredArray = value.filter(
      (item) => item.gameEvent === selectedOption );
      return filteredArray;
    }
  }
}