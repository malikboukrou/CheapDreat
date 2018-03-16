import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
@Component({
  selector: 'page-create-deal',
  templateUrl: 'create-deal.html'
})


export class CreateDealPage {
  createDealForm: FormGroup;
  deal = {
    nom: '',
    adresse: '',
    ville: '',
    codepostal: '',
    latitude: '',
    longitude: '',
    telephone: '',
    datedebut: '',
    datefin: '',
    jour: '',
    moment: '',
    categorie_restaurant: '',
    reduction_type: '',
    montant_reduction: '',
    description: '',
    prix: '',
    type: ''
  };

  matin = true;
  midi = true;
  soir = true;
  lundi = true;
  mardi = true;
  mercredi = true;
  jeudi = true;
  vendredi = true;
  samedi = true;
  dimanche = true;
  eat: boolean = true;

  colorInactive: string = "#bbb";
  colorActive: string = "#FF0023";
  buttonEat: string = this.colorInactive;
  buttonDrink: string = this.colorInactive;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public formBuilder: FormBuilder) {  
    this.navCtrl = navCtrl;

    this.createDealForm = formBuilder.group({
      nom: ['', Validators.compose([Validators.required])],
      adresse: ['', Validators.compose([Validators.required])],
      ville: ['', Validators.compose([Validators.required,Validators.pattern('^[a-zéèêëàâîïôöûü\'-]+$')])],
      codepostal: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{5}')])],
      telephone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])],
      prix: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      description: ['', Validators.compose([Validators.required,Validators.minLength(10)])],
      categorie_restaurant: ['', Validators.compose([Validators.required])],
      reduction_type: ['', Validators.compose([Validators.required])],
   }); 
  }

  saveDeal() {
    this.parseDays();
    this.parseMoment();
    console.log(this.deal);
    this.restProvider.addDeal(this.deal).then((result) => {
      console.log("result: ", result);
      this.navCtrl.pop();
    }, (err) => {
      console.log("error: ", err);
      this.navCtrl.pop();
    });
  }


  setType(choice: string) {
    if (choice === 'eat') {
      this.buttonEat = this.colorActive;
      this.buttonDrink = this.colorInactive;
      this.deal.type = "eat";
      this.eat = true;
      console.log("eat:"+this.eat);
    }
    else if (choice === 'drink') {
      this.buttonEat = this.colorInactive;
      this.buttonDrink = this.colorActive;
      this.deal.type = "drink";
      this.eat = false;
      
      console.log("eat:"+this.eat);
    }
    this.refreshPage();
  }

  parseDays() {
    var jours = "";
    if (this.lundi) jours += "1";
    if (this.mardi) jours += "2";
    if (this.mercredi) jours += "3";
    if (this.jeudi) jours += "4";
    if (this.vendredi) jours += "5";
    if (this.samedi) jours += "6";
    if (this.dimanche) jours += "7";
    this.deal.jour = jours;
  }

  parseMoment() {
    var moments = "";
    if (this.midi) moments += "1";
    if (this.matin) moments += "2";
    if (this.soir) moments += "3";
    this.deal.moment = moments;
  }

  ionViewDidEnter() {
    this.setType('eat');
  }

  ionViewWillEnter() {
    this.doNothing();
  }

  refreshPage() {
    this.ionViewWillEnter();
  }

  doNothing(){

  }

}
