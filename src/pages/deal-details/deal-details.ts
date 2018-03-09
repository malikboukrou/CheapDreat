import {Component} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import { ListDealPage } from '../list-deal/list-deal';


@Component({
  selector: 'page-deal-details',
  templateUrl: 'deal-details.html'
})
export class DealDetailsPage {
  selectedDeal: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedDeal = navParams.get('deal');
  }

  returnToList() {
    console.log("return list deal");
    this.navCtrl.push(ListDealPage);
  }
}
