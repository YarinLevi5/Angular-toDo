import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  items: any[] = [];

  pushItemIntoItemsArray(event: object) {
    this.items.push(event);
  }
}
