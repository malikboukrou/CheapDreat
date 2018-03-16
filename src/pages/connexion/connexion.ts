import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html'
})
export class ConnexionPage {
  client: any;
  user: any;

  constructor(public navCtrl: NavController, public http: HttpClient, public restProvider: RestProvider) {
    this.user = {
      identifiant: '',
      mdp: '' 
    }; // initial value
    this.http = http;
    this.client = {
      id_client: '',
      mail: '',
      mdp: '',
      pseudo: '',
      numero: ''
    };

  }


  connect() {
    console.log(this.user);
    this.restProvider.sendLogin(this.user).then((result) => {
      console.log(result);
      this.client = result;
      window.localStorage.setItem('id_client', this.client.id_client);
      window.localStorage.setItem('mdp', this.client.mdp);
      window.localStorage.setItem('pseudo', this.client.pseudo);
      window.localStorage.setItem('numero', this.client.numero);
      window.localStorage.setItem('mail', this.client.mail);

      this.navCtrl.push(TabsPage);
    }, (err) => {
      console.log(err);
    });
  }
}
