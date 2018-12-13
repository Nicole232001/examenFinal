import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ObjetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-objeto',
  templateUrl: 'objeto.html',
})
export class ObjetoPage {

  producto;
  carrito;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.producto= this.navParams.get('producto');
    this.carrito= this.navParams.get('carrito');
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObjetoPage');
  }
  clicktotal(){
    this.carrito.push(this.producto);
    this.navCtrl.pop();
  }
}
