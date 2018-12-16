import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatTabsModule,
  MatInputModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatInputModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class MaterialModule { }

