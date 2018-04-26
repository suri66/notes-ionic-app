import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class NotesService{
  private notes: {note: string, modifiedDate: any}[] = [];

  constructor (private storage: Storage) {}

  addNote(note: {note: string, modifiedDate: any}){
    this.notes.push(note);
    this.storage.set('notes', this.notes);
  }

  getNote(){
    return this.storage.get('notes')
    .then(
      (notes) => {
        this.notes = notes == null ? [] : notes;
        return this.notes.slice();
      }
    );
  }
}
