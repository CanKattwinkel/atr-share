import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimepickerComponent } from './timepicker.component';
import {MatAutocompleteModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  declarations: [
    TimepickerComponent,
  ],
  exports: [
    TimepickerComponent,
  ],
})
export class TimepickerModule { }
