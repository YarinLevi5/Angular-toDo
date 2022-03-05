import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css'],
})
export class AddToDoComponent {
  @Input() placeholder = 'Your task';
  @Input() text = '';
  @Output() newItemEvent = new EventEmitter<object>();

  addItem(task: string) {
    this.newItemEvent.emit({ title: task });
  }
}
