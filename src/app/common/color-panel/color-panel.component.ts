import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {mixinColor, ThemePalette} from '@angular/material';


/** @docs-private */
export class AppColorPanelBase {
  constructor(public _elementRef: ElementRef) {
  }
}

export const _AppPanelMixinBase = mixinColor(AppColorPanelBase);


@Component({
  selector: 'app-color-panel',
  templateUrl: './color-panel.component.html',
  styleUrls: ['./color-panel.component.scss'],
})
export class ColorPanelComponent extends _AppPanelMixinBase implements OnInit {

  @Input() color: ThemePalette;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

  ngOnInit() {
  }

}
