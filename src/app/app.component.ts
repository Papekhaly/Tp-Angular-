import { Component } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // const config = {
  //   apiKey: "AIzaSyDu_3zE1WUXHwh_bB-mgiJwjzPOw6vpKQY",
  //   authDomain: "angular-auth-d3ed1.firebaseapp.com",
  //   databaseURL: "https://angular-auth-d3ed1.firebaseio.com",
  //   projectId: "angular-auth-d3ed1",
  //   storageBucket: "angular-auth-d3ed1.appspot.com",
  //   messagingSenderId: "922979516123"
  // };
  // firebase.initializeApp(config);

}
