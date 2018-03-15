import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {Geolocation} from '@ionic-native/geolocation'; 
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { GoogleMaps,GoogleMap,GoogleMapsEvent,GoogleMapOptions,CameraPosition,MarkerOptions,Marker} from '@ionic-native/google-maps';


import {DealDetailsPage} from '../pages/deal-details/deal-details';
import {HomePage} from '../pages/home/home';
import {CreateAccountPage} from '../pages/create-account/create-account';
import {ConnexionPage} from '../pages/connexion/connexion';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {CreateDealPage} from "../pages/create-deal/create-deal";

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    DealDetailsPage,
    HomePage,
    CreateAccountPage,
    ConnexionPage,
    CreateDealPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DealDetailsPage,
    HomePage,
    CreateAccountPage,
    ConnexionPage,
    CreateDealPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    Geolocation,
    NativeGeocoder,
    GoogleMaps
  ]
})
export class AppModule {}
