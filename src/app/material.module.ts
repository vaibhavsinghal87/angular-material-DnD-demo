import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule
} from '@angular/material';

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    DragDropModule,
    MatCardModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    DragDropModule,
    MatCardModule
  ]
})
export class MaterialModule { }