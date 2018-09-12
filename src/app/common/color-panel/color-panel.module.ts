import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPanelComponent } from './color-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ColorPanelComponent,
  ],
  exports: [
    ColorPanelComponent,
  ],
})
export class ColorPanelModule { }
