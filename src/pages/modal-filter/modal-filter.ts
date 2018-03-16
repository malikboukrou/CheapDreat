import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-modal-filter',
    templateUrl: 'modal-filter.html',
})
export class ModalFilterPage {
    filter = {
        rayon: 10,
        categorie_restaurant: '',
        prix: {min: 10, max: 50},
        type: ''
    };

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
        this.filter.type = navParams.get('choice');
    }

    public closeModal() {
        this.viewCtrl.dismiss(this.filter);
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ModalFilterPage');
        console.log(this.navParams.get('message'));
    }
}
