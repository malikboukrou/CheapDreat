import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  favorites : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.favorites = [{}];
  }

  ionViewDidEnter() {
    this.getFavorites();
  }

  doRefresh(refresher) {
    console.log('Started', refresher);
    this.getFavorites();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }

  itemTapped(event, fav) {
    //
  }


  getFavorites(){
    /* this.restProvider.getDeal('')//id_client
      .then(data => {
        this.favorites = data;
        console.log(data);
      })
      .catch(e => {
        console.log("getFavorites error ", e);
      }) */
  }
}
