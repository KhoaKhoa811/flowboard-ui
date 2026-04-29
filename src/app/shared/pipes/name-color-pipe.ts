import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameColor',
})
export class NameColorPipe implements PipeTransform {

  private getAvatarColor(name: string): string {
    const colors = [
      '#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e',
      '#16a085', '#27ae60', '#2980b9', '#8e44ad', '#2c3e50',
      '#f39c12', '#d35400', '#c0392b', '#7f8c8d', '#bdc3c7',
    ];
    const hash = this.hashString(name);
    return colors[hash % colors.length];
  }

  private hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
  }

  transform(name: string): string {
    return this.getAvatarColor(name);
  }
}
