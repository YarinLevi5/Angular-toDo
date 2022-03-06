import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() title = '';
  @Output() checkboxEvent = new EventEmitter<boolean>();
  isComplete: boolean = false;

  toggleCompleteItem() {
    this.checkboxEvent.emit((this.isComplete = !this.isComplete));
  }
}
