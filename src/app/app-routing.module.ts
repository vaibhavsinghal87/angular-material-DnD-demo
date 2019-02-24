import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicDnDComponent } from './components/dnd/basic-dnd/basic-dnd.component';
import { ReorderingListDnDComponent } from './components/dnd/reordering-list-dnd/reordering-list-dnd.component';
import { DragHandleDndComponent } from './components/dnd/drag-handle-dnd/drag-handle-dnd.component';

const routes: Routes = [
  { path: 'basicDnD', component: BasicDnDComponent },
  { path: 'reorderingList', component: ReorderingListDnDComponent },
  { path: 'dragHandle', component: DragHandleDndComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
