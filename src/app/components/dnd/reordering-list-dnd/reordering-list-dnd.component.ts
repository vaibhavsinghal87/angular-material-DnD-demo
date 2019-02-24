import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-reordering-list-dnd',
  templateUrl: './reordering-list-dnd.component.html',
  styleUrls: ['./reordering-list-dnd.component.css']
})
export class ReorderingListDnDComponent implements OnInit {

  dragItems: Array<string> = [
    'Item1',
    'Item2',
    'Item3',
    'Item4',
    'Item5',
  ];

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.dragItems, event.previousIndex, event.currentIndex);
  }

}
