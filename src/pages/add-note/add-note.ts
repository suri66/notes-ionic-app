import { Component } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {

  constructor(private notesService: NotesService, private navCtrl: NavController ) {
  }

  onSaveNote(value: {note: string, modifiedDate: any}){
    value.modifiedDate = new Date();
    this.notesService.addNote(value);
    this.navCtrl.pop();
  }

}
