import { Component, ViewChild, ElementRef } from '@angular/core';

import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { DealDetailsPage } from '../deal-details/deal-details';
import { RestProvider } from '../../providers/rest/rest';
import { CreateDealPage } from '../create-deal/create-deal';

@Component({
  template: `
    <span>WOOOORK</span>
  `
})
export class PopoverPage {
  constructor(private navParams: NavParams) {
  }
}


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
      id: '',
      nom: '',
      adresse: '',
      tel: '',
      description: '',
      note: '',
      datedeb: '',
      datefin: '',
      jours: '',
      moment: '',
      type: '',
      prix: '',
      photos: '',
    }];
  }
  
  getDeal() {
    this.restProvider.getDeal(this.choice)
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

  presentPopover(ev) {

    let popover = this.popoverCtrl.create(PopoverPage);

    popover.present({
      ev: ev
    });
  }

  ionViewDidEnter() {
    this.getDeal();
  }
}
