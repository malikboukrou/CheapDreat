import { Component } from '@angular/core';


import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
@Component({
  selector: 'page-create-deal',
  templateUrl: 'create-deal.html'
})


export class CreateDealPage {
  deal = {
    nom: '',
    adresse: '',
    ville: '',
    codepostal: '',
    //lat et long
    telephone: '',
    datedebut: '',
    datefin: '',
    jour: '',
    moment: '',
    categorie_restaurant: '',
    reduction_type: '',
    montant_reduction: '',
    description: '',
    prix: '',
    type: ''
  };

  jours: any;
  moments: any;

  colorInactive: string = "#bbb";
  colorActive: string = "#FF0023";
  buttonEat: string = this.colorInactive;
  buttonDrink: string = this.colorInactive;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    this.moments = ['Matin', 'Midi', 'Soir'];
  }

  saveDeal() {
    let jours: string[];

    this.restProvider.addDeal(this.deal).then((result) => {
      console.log("result: ", result);
      this.navCtrl.pop();
    }, (err) => {
      console.log("error: ", err);
      this.navCtrl.pop();
    });
  }


  setType(choice: string) {
    if (choice === 'eat') {
      this.buttonEat = this.colorActive;
      this.buttonDrink = this.colorInactive;
      this.deal.type = "eat";
    }
    else if (choice === 'drink') {
      this.buttonEat = this.colorInactive;
      this.buttonDrink = this.colorActive;
      this.deal.type = "drink";
    }
  }

  onChange() {
    console.log("onchange");
  }
}
