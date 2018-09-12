import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {ColorPanelModule} from '../../common/color-panel/color-panel.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ColorPanelModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
