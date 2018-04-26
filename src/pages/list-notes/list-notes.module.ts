import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListNotesPage } from './list-notes';

@NgModule({
  declarations: [
    ListNotesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListNotesPage),
  ],
})
export class ListNotesPageModule {}
