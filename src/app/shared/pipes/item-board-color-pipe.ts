import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemBoardColor',
})
export class ItemBoardColorPipe implements PipeTransform {
  private readonly colorMap: Record<string, string> = {
    'backlogs': 'rgb(107, 114, 128)',
    'todo': 'rgb(99, 102, 241)',
    'inprogress': 'rgb(217, 119, 6)',
    'done': 'rgb(5, 150, 105)',
    'cancelled':'rgb(156, 163, 175)'
  }

  transform(itemName: string): string {
    if (!itemName) return this.colorMap['backlogs'];

    const key = itemName.toLowerCase();

    return this.colorMap[key] || this.colorMap['backlogs'];
  }
}
