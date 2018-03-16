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
      this.http.get(this.apiUrl + '/utilisateur').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getDeal(choice, lat, long) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/Read.php?type=' + choice + '&client_latitude=' + lat + '&client_longitude=' + long).subscribe(data => {
        resolve(data);
      }, err => {
        console.log("err:" + err.status);
      });
    });
  }

  getFavorites(id_client) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/ReadFavoris.php?id_client=' + id_client).subscribe(data => {
        console.log('fff' + data);
        resolve(data);
      }, err => {
        console.log("err:" + err.status);
      });
    });
  }

  createClient(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/CreateClient.php', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addDeal(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/CreateDeal.php', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  sendLogin(data) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + '/Connexion.php?identifiant=' + data.identifiant + '&mdp=' + data.mdp)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log("err:" + err.status);
        });
    });

  }


  sendLogin2(data) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/Connexion.php?identifiant=' + data.identifiant + '&mdp=' + data.mdp).subscribe(data => {
        resolve(data);
      }, err => {
        console.log("err:" + err.status);
      });
    });
  }


  readFilter(filter) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/ReadFilter.php?type=' + filter.type + '&categorie_restaurant=' + filter.categorie_restaurant + '&rayon=' + filter.rayon).subscribe(data => {
        resolve(data);
      }, err => {
        console.log("err:" + err.status);
      });
    });
  }

  addFavorite(deal, user) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/CreateFavoris.php?id_deal=' + deal + '&id_client=' + user).subscribe(data => {
        resolve(data);
      }, err => {
        console.log("err:" + err.status);
      });
    });
  }

  createCommentaire(data) {
    data = {
      id_deal: 44,
      id_client: 1,
      com: 'SALUUUUT'
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/CreateCommentaire.php', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getAllCommentaire(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/ReadCommentairesDeal.php?id_deal=' + id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log("err:" + err.status);
      });
    });
  }


  getUserId() {
    return window.localStorage.getItem('id_client');
  }

  getUserMdp() {
    return window.localStorage.getItem('mdp');
  }

  getUserPseudo() {
    return window.localStorage.getItem('pseudo');
  }

  getUserNum() {
    return window.localStorage.getItem('numero');
  }

  getUserMail() {
    return window.localStorage.getItem('mail');
  }

}
