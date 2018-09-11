import {Component, OnInit} from '@angular/core';
import {menuMock} from '../../menu.mock';
import {Menu} from '../../menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: Menu = menuMock;

  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
  }

}
