import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BackgroundLocationProvider } from '../../providers/background-location/background-location'  
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public backgroundLoc: BackgroundLocationProvider, public navCtrl: NavController) {
  }

}
