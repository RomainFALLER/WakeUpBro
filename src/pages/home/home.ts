import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

declare var require: any;
const localforage: LocalForage = require("localforage");

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private Storage: Storage;
  public alarms;
  private alarmsTest: Array<Object>;
  private alarmsTestGet: Array<Object>;
  originalData: any;

  constructor(public navCtrl: NavController,storage: Storage) {
    this.Storage = storage;

this.alarmsTest=[
	{
		id_alarm: 0,
		name: "COURS A L'ISEN :/",
		sound:"ISEN SUCKS",
		hour:"11h11",
		days_repeat:["Lundi", "Mardi","TheWeeknd"],
		language_question:"French",
		language_response:"INGLICHE",
		vibrator: "true",
    checked: false,
		number_questions:"15"
},{
		id_alarm: 1,
		name: "SHES Sad Lif :/",
		sound:"ISEN SUCKS",
		hour:"11h11",
		days_repeat:["Lundi", "Mardi","TheWeeknd"],
		language_question:"French",
		language_response:"INGLICHE",
		vibrator: "true",
    checked: false,
		number_questions:"15"
},
{
		id_alarm: 2,
		name: "SHES Sad Lif :/",
		sound:"ISEN SUCKS",
		hour:"11h11",
		days_repeat:["Lundi", "Mardi","TheWeeknd"],
		language_question:"French",
		language_response:"INGLICHE",
		vibrator: "true",
    checked: false,
		number_questions:"15"
}];


this.originalData = [
			{name: 'Joshua Morony', subscribers: 1700, avatar: 'http://placehold.it/100', channel_url: 'https://www.youtube.com/channel/UCbVZdLngJH6KOJvpAOO3qTw'},
			{name: 'Phillip DeFranco', subscribers: 4917409, avatar: 'http://placehold.it/100', channel_url: 'https://www.youtube.com/user/sxephil'},
			{name: 'Casey Neistat', subscribers: 5933358, avatar: 'http://placehold.it/100', channel_url: 'https://www.youtube.com/user/caseyneistat'},
			{name: 'CaptainSparklez', subscribers: 9753734, avatar: 'http://placehold.it/100', channel_url: 'https://www.youtube.com/channel/UCshoKvlZGZ20rVgazZp5vnQ'},
			{name: 'Hutch', subscribers: 925712, avatar: 'http://placehold.it/100', channel_url: 'https://www.youtube.com/channel/UCzRrheyUCB_qUrrfQ_sEG-Q'},
			{name: 'Ionic', subscribers: 17835, avatar: 'http://placehold.it/100', channel_url: 'https://www.youtube.com/channel/UChYheBnVeCfhCmqZfCUdJQw'},
			{name: 'vlogbrothers', subscribers: 2945256, avatar: 'http://placehold.it/100', channel_url: 'https://www.youtube.com/channel/UCGaVdbSav8xWuFWTadK6loA'}
		];

localforage.setItem("people", this.alarmsTest);
localforage.getItem("people").then((result) => {
            this.alarmsTestGet = result ? <Array<Object>> result : [];
        }, (error) => {
            console.log("ERROR: ", error);
        });
  }


  clicked(id){
    this.alarmsTestGet.length;
    console.log(this.alarmsTestGet);
  }

  filterData(){ 
		this.originalData = this.originalData.filter((alarm) => {
      console.log("test log filter data");
			return alarm.id_alarm > 0;
		});

	}

	testfunction(index){
		localforage.setItem("people", this.alarmsTestGet);
		console.log("test function"+index);
		console.log(this.alarmsTestGet);
	}

	deleteAlarm(index){
		this.alarmsTestGet.splice(index, 1);
		localforage.setItem("people", this.alarmsTestGet);
		localforage.setItem("people", this.alarmsTest);
	}

}
