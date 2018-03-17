import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';

import { NavController, NavParams } from 'ionic-angular';
import { ListDealPage } from '../list-deal/list-deal';
import { RestProvider } from '../../providers/rest/rest';


import { ModalController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-deal-details',
  templateUrl: 'deal-details.html'
})
export class DealDetailsPage {
  selectedDeal: any;
  options: GeolocationOptions;
  currentPos: Geoposition;
  address: string;
  latitude: string;
  longitude: string;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  deals: any;
  favori: any;
  favorized: boolean = true;

  constructor(public navCtrl: NavController, public restProvider: RestProvider, public navParams: NavParams,
    private geolocation: Geolocation, public googleMaps: GoogleMaps, public modalCtrl: ModalController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedDeal = navParams.get('deal');
    this.deals = [{
      latitude: "50.6316211",
      longitude: "3.1533357",

    },
    {
      latitude: "50.291002291002291002",
      longitude: "2.7775349999999435",
    },
    {
      latitude: "50.6927049",
      longitude: "3.177846999999929",
    }
    ];
    this.initFav();
  }

  returnToList() {
    console.log("return list deal");
    //this.navCtrl.push(ListDealPage);
    this.navCtrl.pop();
  }

  ionViewDidEnter(){
    this.addMap(this.selectedDeal.latitude,this.selectedDeal.longitude);
}    


  addMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: { lat: +this.selectedDeal.latitude, lng: +this.selectedDeal.longitude },
    });

    let content = "<p>Deal location !</p>";
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }
  addMarker2() {
    for (var i = 0; i < this.deals.length; i++) {


      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: { lat: +this.deals[i].latitude, lng: +this.deals[i].longitude },
      });

      let content = "<p>2 current position !</p>";
      let infoWindow = new google.maps.InfoWindow({
        content: content
      });

      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);
      });
    }
  }
  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker)
    })
  }

  addMap(lat, long) {

    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker();
    //this.addMarker2();

  }

  addFavorite() {
    this.restProvider.addFavorite(this.selectedDeal.id_deal, this.restProvider.getUserId())//manque userId
      .then(data => {
        this.favori = data;
        if (this.favori.message.includes("Creation")) {
          this.favorized = true;
        }
        else {
          this.favorized = false;
        }
      })
      .catch(e => {
        console.log("getDeal error ", e);
      })
  }

  initFav() {
    this.restProvider.getFavorites(this.restProvider.getUserId())
      .then(data => {
        this.favori = data;
        if (this.favori.message.includes("Aucun")) {
          this.favorized = false;
        }
        else {
          this.favorized = true;
        }
      })
      .catch(e => {
        console.log("getDeal error ", e);
      })
  }

  addCommentaire() {
    this.restProvider.createCommentaire(this.selectedDeal)
      .then(data => {
        this.deals = data;
        console.log(data);
      })
      .catch(e => {
        console.log("getDeal error ", e);
      })
  }

  getCommentaires() {
    this.restProvider.getAllCommentaire(this.selectedDeal.id_deal)
      .then(data => {
        this.deals = data;
        console.log(data);
      })
      .catch(e => {
        console.log("getDeal error ", e);
      })
  }

  public openModalFilter() {
    var modalPage = this.modalCtrl.create('ModalComPage', { id_deal: this.selectedDeal.id_deal, id_client: '1' }); //id_client: this.id_client
    modalPage.onDidDismiss(data => {
      console.log(data);
    });
    modalPage.present();
  }
}
