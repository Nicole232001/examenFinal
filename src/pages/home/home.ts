import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import { Storage } from '@ionic/storage';
import { ProductosPage } from '../productos/productos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
usuario=[]
correo:'';
contrasena:'';
nombre:'';
telefono:'';
productos=ProductosPage;
registar=RegistrarPage;
  constructor(public navCtrl: NavController, public alertCtrl:AlertController, public storage: Storage) {
    this.storage.keys()
     .then(keys=> 
      {
        console.log(keys);
        if (keys.some(key => key == 'usuario')) {
          this.storage.get('usuario')
          .then(usuario => {
            this.usuario= JSON.parse(usuario);
          });
    }
  });

}

  clickinicio(){
    let index=this.usuario.findIndex(usuario => usuario.correo == this.correo && usuario.contrasena == this.contrasena);

      if (index>=0){
        this.navCtrl.push(this.productos);
      }
      else {
        const alert=this.alertCtrl.create({
        title:"Error", subTitle:"correo y constraseña invalidos", buttons:["ok"]
        })
        alert.present();
      }
  }
  clickregistro(){
    this.navCtrl.push(this.registar,{usuario:this.usuario});
  }
}
