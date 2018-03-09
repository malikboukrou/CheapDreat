import { Component } from '@angular/core';


import {NavController, NavParams} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
@Component({
  selector: 'page-create-deal',
  templateUrl: 'create-deal.html'
})

export class CreateDealPage {
  reducType: string;
  eatOrDrink: string;
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
    prix: ''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {

  }

  saveDeal() {
    this.restProvider.addDeal(this.deal).then((result) => {
      console.log(result);
      this.navCtrl.pop();
    }, (err) => {
      console.log(err);
    });
  }

  showSelectValue(type: string) {
    console.log("type:"+type);
  }

  setType(choice: string){
    if (choice === 'eat'){
      console.log("eat");
    }
    else if (choice === 'drink'){
      console.log("drink");
    }
    else console.log("OTHER");
  }
}
