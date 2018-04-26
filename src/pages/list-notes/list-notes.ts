import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddNotePage } from '../add-note/add-note';
import { NotesService } from '../../services/notes.service';


/**
 * Generated class for the ListNotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-notes',
  templateUrl: 'list-notes.html',
})
export class ListNotesPage {
  notes: {note: string, modifiedDate: any}[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private notesService: NotesService) {
  }

  ionViewWillEnter(){
      this.notesService.getNote()
      .then(notes => {
        this.notes = notes;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListNotesPage');
  }

  addNewNote(){
    console.log('add new note')
    this.navCtrl.push(AddNotePage);
  }

}
