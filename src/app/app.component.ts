import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
//import { environment } from '../environments/environment';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bcards-ver-num01';


  

  ngOnInit() {
    firebase.initializeApp(environment.firebaseConfig);
    // firebase.initializeApp(environment.firebaseConfig);
  }
}
