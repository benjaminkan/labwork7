import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  items: Observable<any[]>;

  constructor(public navCtrl: NavController,
    public db: AngularFireDatabase,
  ) {
    this.getDataFromFireBase();
  }

  getDataFromFireBase() {
    this.db.list('song-list').valueChanges().subscribe(
      data => {
        console.log(data);

      }
    );
  }



}
