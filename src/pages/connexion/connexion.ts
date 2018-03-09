import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html'
})
export class ConnexionPage {
  //user: any;

  constructor(public navCtrl: NavController, public http: HttpClient, public restProvider: RestProvider) {
    /*this.user.email = '';
    this.user.pseudo = '';
    this.user.mdp = '';*/
    this.http = http;
  }


  connect() {

  }
}
