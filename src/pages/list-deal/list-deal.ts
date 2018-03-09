import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { DealDetailsPage } from '../deal-details/deal-details';
import { Deal } from '../../models/deal';
import { RestProvider } from '../../providers/rest/rest';
import { CreateDealPage } from '../create-deal/create-deal';

@Component({
  selector: 'page-list-deal',
  templateUrl: 'list-deal.html'
})
export class ListDealPage {
  deals: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.deals = [{
      id: "a1",
      nom: "Domino's",
      adresse: "10 rue du val, 59000 Lille",
      tel: "0650505050",
      description: "bon deal",
      note: [5, 6, 9],
      datedeb: "10/10/2010",
      datefin: "11/11/2011",
      jours: ["lundi", "mercredi"],
      moment: "midi",
      type: "Rabais",
      prix: 15,
      photos: null,
    }];
    this.getDeal();
  }
  getDeal() {
    this.restProvider.getDeal()
      .then(data => {
        this.deals = data;

        console.log(this.deals);
      });
  }

  itemTapped(event, deal) {
    this.navCtrl.push(DealDetailsPage, {
      deal: deal
    });
  }

  goAddDeal(){
    console.log("add deal");
    this.navCtrl.push(CreateDealPage);
  }
}
