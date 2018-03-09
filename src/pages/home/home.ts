import {Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreateAccountPage } from '../create-account/create-account';
import { ConnexionPage } from '../connexion/connexion';
import { ListDealPage } from '../list-deal/list-deal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToCreate() {
    this.navCtrl.push(CreateAccountPage);
  }

  goToConnect() {
    this.navCtrl.push(ConnexionPage);
  }

  goWithoutConnect() {
    this.navCtrl.push(ListDealPage);
  }

  connectFacebook() {
    //remplir ici
  }
}
