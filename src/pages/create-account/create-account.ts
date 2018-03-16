import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html'
})
export class CreateAccountPage {

  authForm: FormGroup;

  client = {
    mail: '',
    mdp: '',
    pseudo: '',
    numero: ''
  };

  constructor(public nav: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public restProvider: RestProvider) {
           this.nav = nav;
    
           this.authForm = formBuilder.group({
               pseudo: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(3), Validators.maxLength(30)])],
               mdp: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
               mail: ['', Validators.compose([Validators.required,Validators.email])],
               numero:['', Validators.compose([Validators.required,Validators.pattern('[0-9]{10}')])],
               confirmationMDP: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
               
           }, {validator: this.matchingPasswords('mdp', 'confirmationMDP')}); 
       }
       
       onSubmit(value: any): void { 
        if(this.authForm.valid) {
            window.localStorage.setItem('username', value.username);
            window.localStorage.setItem('password', value.password);
 
            //this.nav.push(HomePage);
        }
    } 

    

    matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
      return (group: FormGroup): {[key: string]: any} => {
        let password = group.controls[passwordKey];
        let confirmPassword = group.controls[confirmPasswordKey];
  
        if (password.value !== confirmPassword.value) {
          return {
            mismatchedPasswords: true
          };
        }
      }
    }
    
    saveClient(){
      console.log(this.client);
      this.restProvider.createClient(this.client).then((result) => {
        console.log(result);
        this.nav.pop();
      }, (err) => {
        console.log(err);
      });
  }
}
