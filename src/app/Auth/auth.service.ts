import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public Authentification: AngularFireAuth) { }

  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        this.Authentification.auth.createUserWithEmailAndPassword(email, password)
        .then(
          () => {userData =>
            resolve(userData);
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        this.Authentification.auth.signInWithEmailAndPassword(email, password)
        .then(
          () => {userData =>
            resolve(userData);
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }


  signOutUser() {
    this.Authentification.auth.signOut();
  }
}
