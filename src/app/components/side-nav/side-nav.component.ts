import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  list: Array<object> = [
    { value:'Basic DnD', route: '/basicDnD'},
    { value:'Reordering List', route: '/reorderingList'},
    { value:'Drag Handle', route: '/dragHandle'}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
