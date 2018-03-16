import { Component, ViewChild } from '@angular/core';
import { MenuController, Nav, Platform } from 'ionic-angular';
import { ListDealPage } from '../pages/list-deal/list-deal';
import { HomePage } from '../pages/home/home';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { ConnexionPage } from '../pages/connexion/connexion';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CreateDealPage } from '../pages/create-deal/create-deal';
import { TabsPage } from '../pages/tabs/tabs';
import { RestProvider } from '../providers/rest/rest';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HomePage the root (or first) page
  rootPage: any = HomePage;

  constructor(public platform: Platform, public menu: MenuController, public statusBar: StatusBar, public splashScreen: SplashScreen, public restProvider: RestProvider) {
    this.initializeApp();
  }

  initializeApp() {
    if (this.restProvider.getUserId() != null){
      this.rootPage = TabsPage;
    }
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
