import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the ModalFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-modal-com',
    templateUrl: 'modal-com.html',
})
export class ModalComPage {
    com = {
        id_deal: '',
        id_client: '',
        com: ''
    }

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams,
        public restProvider: RestProvider) {
    }

    public closeModal() {
        this.restProvider.createCommentaire(this.com)
            .then(data => {
                console.log(data);
                this.viewCtrl.dismiss(this.com);
            })
            .catch(e => {
                console.log("getDeal error ", e);
            })
    }


    public close() {
        this.viewCtrl.dismiss(this.com);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ModalFilterPage');
        this.com.id_deal = this.navParams.get('id_deal');
        this.com.id_client = this.navParams.get('client');
    }
}
