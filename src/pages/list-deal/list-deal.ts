import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DealDetailsPage } from '../deal-details/deal-details';
import { RestProvider } from '../../providers/rest/rest';
import { CreateDealPage } from '../create-deal/create-deal';
import { ModalController } from 'ionic-angular';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-list-deal',
  templateUrl: 'list-deal.html'
})
export class ListDealPage {
  deals: any;
  //segment choice eat or drink
  choice: string = "eat";
  options: GeolocationOptions;
  currentPos: Geoposition;
  lat: any;
  long: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider,
    public modalCtrl: ModalController, private geolocation: Geolocation) {
    this.deals = [{}];
  }

  getDeal() {
    console.log("alt:"+this.lat);
    this.restProvider.getDeal(this.choice, this.lat, this.long)
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

  goAddDeal() {
    this.navCtrl.push(CreateDealPage);
  }

  isPhoto(photo) {
    if (photo === undefined) {
      return false;
    }
    return true;
  }

  public openModal() {
    var modalPage = this.modalCtrl.create('ModalFilterPage', { choice: this.choice });
    modalPage.onDidDismiss(data => {
      console.log(data);
      this.restProvider.readFilter(data)
        .then(data => {
          this.deals = data;
          console.log(data);
        })
        .catch(e => {
          console.log("getDeal error ", e);
        })
    });
    modalPage.present();
  }

  ionViewDidEnter() {
    this.getUserPosition();
    console.log("userId:"+this.restProvider.getUserId());
  }

  doRefresh(refresher) {
    console.log('Started', refresher);
    this.getDeal();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }

  getUserPosition() {
    this.options = {
      enableHighAccuracy: false
    };
    this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {
      this.currentPos = pos;
      this.lat = pos.coords.latitude;
      this.long = pos.coords.longitude;
      this.getDeal();

    }, (err: PositionError) => {
      console.log("error : " + err.message);
      ;
    })
  }

}
