import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicDnDComponent } from './components/dnd/basic-dnd/basic-dnd.component';
import { ReorderingListDnDComponent } from './components/dnd/reordering-list-dnd/reordering-list-dnd.component';
import { DragHandleDndComponent } from './components/dnd/drag-handle-dnd/drag-handle-dnd.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    BasicDnDComponent,
    ReorderingListDnDComponent,
    DragHandleDndComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
