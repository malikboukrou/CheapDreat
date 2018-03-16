import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'https://rebeudtr.000webhostapp.com';
  
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getUtilisateur() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/utilisateur').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getDeal(choice:String) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/Read.php?type=' + choice).subscribe(data => {
        resolve(data);
      }, err => {
        console.log("err:"+err.status);
      });
    });
  }

  createClient(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/CreateClient.php', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addDeal(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/CreateDeal.php', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  readFilter(filter) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/ReadFilter.php?type=' + filter.type + '&categorie_restaurant=' + filter.categorie_restaurant).subscribe(data => {
        resolve(data);
      }, err => {
        console.log("err:"+err.status);
      });
    });
  }
}
