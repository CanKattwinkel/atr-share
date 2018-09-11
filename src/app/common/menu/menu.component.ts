import {Component, HostBinding, OnInit} from '@angular/core';
import {menuMock} from '../../menu.mock';
import {Menu} from '../../menu.model';
import {animate, state, style, transition, trigger} from '@angular/animations';
const animationDuration = 500;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('sidenavTransition', [
      state('inactive', style({
        width: '52px',
      })),
      state('active', style({
        width: '250px',
      })),
      transition('inactive => active', animate(`${animationDuration}ms ease-in`)),
      transition('active => inactive', animate(`${animationDuration}ms ease-out`))
    ])
  ]
})
export class MenuComponent implements OnInit {

  items: Menu = menuMock;

  @HostBinding('class.menu-expanded')
  isExpanded: boolean;

  @HostBinding('@sidenavTransition') get sidenavTransition(): 'inactive'  |  'active' {
    return this.isExpanded ? 'active' : 'inactive';
  }

  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }

}
