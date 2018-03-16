import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreateAccountPage } from '../create-account/create-account';
import { ConnexionPage } from '../connexion/connexion';
import { TabsPage } from '../tabs/tabs';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public variableProvider: RestProvider) {

  }

  goToCreate() {
    this.navCtrl.push(CreateAccountPage);
  }

  goToConnect() {
    this.navCtrl.push(ConnexionPage);
  }

  goWithoutConnect() {
    this.navCtrl.push(TabsPage, );
  }

  connectFacebook() {
    //remplir ici
  }

  ionViewDidEnter(){
    console.log("Entered");
    console.log("userId:"+this.variableProvider.getUserId());
  }
}
