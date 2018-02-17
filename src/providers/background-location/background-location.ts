import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';

@Injectable()
export class BackgroundLocationProvider {

	position:BackgroundGeolocationResponse = null;

	constructor(
		private platform: Platform, 
		private backgroundGeolocation: BackgroundGeolocation, 
		public http: HttpClient) {
		
	}

	start(){
		let config:BackgroundGeolocationConfig = {
		    desiredAccuracy: 0,
		    stationaryRadius: 20,
		    distanceFilter: 20,
		    debug: true,
		    stopOnTerminate: false,
		    // Android specific settings.
		    interval: 2000,
		    startOnBoot: true,
		    startForeground: false,
		    // iOS specific settings
		    pauseLocationUpdates: false,
		    saveBatteryOnBackground: true,
	  	};

	  	let ctr = 0;


	  	this.backgroundGeolocation.configure(config).subscribe((location: BackgroundGeolocationResponse) => {
	  		this.position = location;
	  		
	  	}, (err) => {
	  		console.log(err)
	  	});

	  	this.backgroundGeolocation.start();
	}

	stop(){
		if(this.platform.is('ios')){
			this.backgroundGeolocation.finish();
		}

		this.backgroundGeolocation.stop();
	}

}
