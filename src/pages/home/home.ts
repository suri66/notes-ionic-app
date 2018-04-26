import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListNotesPage } from '../list-notes/list-notes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    setTimeout(() => {
      this.navCtrl.push(ListNotesPage);
    }, 0);
  }
}
