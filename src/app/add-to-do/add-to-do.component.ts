import { Component, OnInit, Input, ViewChild } from '@angular/core';
@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css'],
})
export class AddToDoComponent implements OnInit {
  @Input() placeholder = 'Add to do';
  @Input() text = '';
  items: any[] = [];
  addItem(task: string) {
    this.items.push({ id: this.items.length, title: task });
  }
  constructor() {}

  ngOnInit(): void {}
}
