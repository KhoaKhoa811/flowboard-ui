import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-shared-dialog',
  imports: [CommonModule, MatIcon],
  templateUrl: './shared-dialog.html',
  styleUrl: './shared-dialog.scss',
})
export class SharedDialog {
  @Input() toggle: boolean = false;
  @Output() toggleChange = new EventEmitter<boolean>();

  @Input() title: string = "Dialog";

  @Input() dialogWidth: string = "460px";
  
  toggleForm() {
    this.toggle = !this.toggle;

    this.toggleChange.emit(this.toggle);
  }
}
