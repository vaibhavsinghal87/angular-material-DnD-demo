import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicDnDComponent } from './components/dnd/basic-dnd/basic-dnd.component';

const routes: Routes = [
  { path: 'basicDnD', component: BasicDnDComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
