import {ChangeDetectorRef, Component, HostBinding, OnInit} from '@angular/core';
import {menuMock} from '../../menu.mock';
import {Menu} from '../../menu.model';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {merge, of, Subject, timer} from 'rxjs';
import {animationFrame} from 'rxjs/internal/scheduler/animationFrame';
import {repeat, takeUntil} from 'rxjs/operators';
import {FormControl} from '@angular/forms';

const animationDuration = 250;

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

  stop$ = new Subject<void>();

  @HostBinding('@sidenavTransition') get sidenavTransition(): 'inactive'  |  'active' {
    return this.isExpanded ? 'active' : 'inactive';
  }

  constructor(private cdf: ChangeDetectorRef) {
  }

  ngOnInit() {
  }


  toggle(): void {

    this.stop$.next();
    of(0, animationFrame)
      .pipe(
        repeat(),
        takeUntil(
          merge(timer(animationDuration), this.stop$),
        ),
      )
      .subscribe(() => this.cdf.markForCheck(), null, () => console.log("complete"));

    this.isExpanded = !this.isExpanded;
  }

}
