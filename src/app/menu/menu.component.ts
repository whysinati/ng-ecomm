import { Component, OnInit } from '@angular/core';
import { menu } from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent { // implements OnInit {
  menu = menu;

  share() {
    window.alert('This menu item has been shared!');
  }

  onNotify() {
    window.alert('One of your favorites is on special!');
  }

  // constructor() { }

  // ngOnInit() {
  // }

}
