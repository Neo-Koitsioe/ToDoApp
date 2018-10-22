import { TASKS } from './../../mocks/Task.mocks';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  name: string;
  date: string;
  time: string;

 
   

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }


  onClick(){
      this.navCtrl.push("ViewPage");
      //[{name: this.name, date: this.date, time: this.time}];
      TASKS.push({name:this.name,date:this.date,time:this.time});
      
  }

  cancel(){
    this.navCtrl.push("HomePage");
    
}


}
