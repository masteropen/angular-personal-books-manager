import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-books-manager';
  constructor() {
    const config = {
      apiKey: "AIzaSyA5fQPALCwF-3AhsSLMgkSMBLquioD4eA0",
      authDomain: "angular-personal-books.firebaseapp.com",
      databaseURL: "https://angular-personal-books.firebaseio.com",
      projectId: "angular-personal-books",
      storageBucket: "angular-personal-books.appspot.com",
      messagingSenderId: "48853693820",
      appId: "1:48853693820:web:9b9a1d0c7615003114e0f9"
    }

    firebase.initializeApp(config);
  }
}
