import { Component } from '@angular/core';
import { ItemBoardColorPipe } from '../../../../shared/pipes/item-board-color-pipe';

@Component({
  selector: 'app-item-board',
  imports: [ItemBoardColorPipe],
  templateUrl: './item-board.html',
  styleUrl: './item-board.scss',
})
export class ItemBoard {}
