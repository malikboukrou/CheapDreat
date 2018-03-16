import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home'

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  id_client: string;
  mdp: string;
  mail: string;
  pseudo: string;
  numero: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id_client = window.localStorage.getItem('id_client');
    this.mdp = window.localStorage.getItem('mdp');
    this.mail = window.localStorage.getItem('mail');
    this.pseudo = window.localStorage.getItem('pseudo');
    this.numero = window.localStorage.getItem('numero');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  logout() {
    window.localStorage.removeItem('id_client');
    window.localStorage.removeItem('mdp');
    window.localStorage.removeItem('mail');
    window.localStorage.removeItem('pseudo');
    window.localStorage.removeItem('numero');
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();         
}  

}
