import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, PopoverController, List } from 'ionic-angular';

import { DealDetailsPage } from '../deal-details/deal-details';
import { Deal } from '../../models/deal';
import { RestProvider } from '../../providers/rest/rest';
import { CreateDealPage } from '../create-deal/create-deal';
import { MyPopOverPage } from '../my-pop-over/my-pop-over';


@IonicPage()
@Component({
  selector: 'page-list-deal',
  templateUrl: 'list-deal.html'
})
export class ListDealPage {
  deals: any;

  //segment choice eat or drink
  choice: string = "eat";

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider,
  public popoverCtrl: PopoverController) {
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
        console.log(data);
      })
      .catch(e => {
        console.log("getDeal error ", e);
      })
  }

  itemTapped(event, deal) {
    this.navCtrl.push(DealDetailsPage, {
      deal: deal
    });
  }

  goAddDeal(){
    this.navCtrl.push(CreateDealPage);
  }

  // A IMPLEMENTER
  getItems(ev) {
    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      console.log("YOOO ", val);
      this.deals = this.deals.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  isPhoto(photo){
    if (photo === undefined){
      return false;
    }
    return true;
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(MyPopOverPage);
    popover.present();
  }
}
