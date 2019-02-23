import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  list: Array<object> = [
    { value:'Basic DnD', route: '/basicDnD'},
    { value:'Basic DnD1', route: '/basicDnD1'},
    { value:'Basic DnD2', route: '/basicDnD2'}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
