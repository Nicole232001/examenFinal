import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarritoPage } from '../carrito/carrito';
import { ObjetoPage } from '../objeto/objeto';

/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {
carro=CarritoPage;
objeto=ObjetoPage;
carrito=[];
productos=[
  {id:0,pelicula: "The greatest showman", costo:"$120",vendedor:{nombre:"John Smith", valoracion:[1,2,3,4]}, resena:{autor:"Monica Jones", comentario:"Me encantó esta película. La recomiendo al 100%", fecha:"15/01/18"},fechal:"04/12/17", disponibles:"10", imagen:"../assets/greatest.jpg"},
  {id:1,pelicula:"Mamma Mia 2", costo:"$160",vendedor:{nombre:"Kate Johnson", valoracion:[1,2,3]}, resena:{autor:"Tom Williams", comentario:"Más canciones que pelicula… Aunque me encanta ABBA.", fecha:"18/08/18"},fechal:"05/07/18", disponibles:"4",imagen:"../assets/mamma.jpg"},
  {id:2,pelicula:"Jurasic world",costo:"$150", vendedor:{nombre:"Jenny McArthy", valoracion:[1,2,3,4]}, resena:{autor:"David Davis", comentario:"Muy Buena película. Hizo que no me quedara dormido", fecha:"28/12/18"},fechal:"23/02/18", disponibles:"52",imagen:"../assets/jurassic2.jpg"},
  {id:3,pelicula:"Jumanji", costo:"$90",vendedor:{nombre:"Paul Hinderson", valoracion:[1,2,3]}, resena:{autor:"Martin Martin", comentario:"Esperaba más de la película", fecha:"03/10/18"},fechal:"05/07/18", disponibles:"32",imagen:"../assets/jumanji.png"},
  {id:4,pelicula:"Viaje 2",costo:"$60", vendedor:{nombre:"John Smith", valoracion:[1,2,3,4]}, resena:{autor:"Amy Clark", comentario:"Amo a Josh Hutcherson con Vanessa hudgens", fecha:"18/11/18"},fechal:"04/12/17", disponibles:"12",imagen:"../assets/viaje.jpg"},
  {id:5,pelicula:"Juegos del hambre",costo:"$50", vendedor:{nombre:"Kate Johnson", valoracion:[1,2,3]}, resena:{autor:"Emily Young", comentario:"Yo soy team Gale", fecha:"19/02/18"},fechal:"26/08/18", disponibles:"10",imagen:"../assets/juegos.jpg"},
  {id:6,pelicula:"Crepusculo",costo:"$50", vendedor:{nombre:"Jenny McArthy", valoracion:[1,2,3,4]}, resena:{autor:"Edward Edwards", comentario:"Me hace creer en el amor… <3", fecha:"21/09/18"},fechal:"26/08/18", disponibles:"6",imagen:"../assets/crepusculo.jpg"},
  {id:7,pelicula:"Los increibles",costo:"$160", vendedor:{nombre:"Paul Hinderson", valoracion:[1,2,3]}, resena:{autor:"Nelson Nelson", comentario:"Esperé más de 14 años para saber que le pasaba al Subterráneo y solo aparece 4  min", fecha:"15/07/17"},fechal:"23/02/16", disponibles:"4",imagen:"../assets/increibles.jpg"},
  {id:8,pelicula:"Mulan",costo:"$75", vendedor:{nombre:"John Smith", valoracion:[1,2,3,4]}, resena:{autor:"Emma Morris", comentario:"Female Power! ", fecha:"21/12/18"},fechal:"05/07/18", disponibles:"47",imagen:"../assets/mulan.jpg"},
  {id:9,pelicula:"Lilo y stitch",costo:"$40", vendedor:{nombre:"Kate Johnson", valoracion:[1,2,3]}, resena:{autor:"Tommy Turner", comentario:"Llegué tarde, por ir a la tienda, por mermelada, porque solo había ese tonto atun!", fecha:"30/11/18"},fechal:"26/08/18", disponibles:"20",imagen:"../assets/lilo.jpg"},
  {id:10,pelicula:"IT",costo:"$80", vendedor:{nombre:"Jenny McArthy", valoracion:[1,2,3,4]}, resena:{autor:"Scott Calvin", comentario:"Me gustó más la original", fecha:"10/10/18"},fechal:"08/10/17", disponibles:"20",imagen:"../assets/it.jpg"},
  {id:11,pelicula:"Rapidos y furiosos",costo:"$90", vendedor:{nombre:"Paul Hinderson", valoracion:[1,2,3]}, resena:{autor:"Olivia Wood", comentario:"Paul :’(", fecha:"10/12/17"},fechal:"04/12/17", disponibles:"15",imagen:"../assets/rapidos.jpg"},
  {id:12,pelicula:"Yo antes de ti",costo:"$75", vendedor:{nombre:"John Smith", valoracion:[1,2,3,4]}, resena:{autor:"Sophia Jenkins", comentario:"Chillé :(", fecha:"10/10/18"},fechal:"26/08/18", disponibles:"3",imagen:"../assets/yo.jpg"},
  {id:13,pelicula:"High school musical", costo:"$45",vendedor:{nombre:"Kate Johnson", valoracion:[1,2,3]}, resena:{autor:"Ava Sanders", comentario:"Que Buenos recuerdos :’)", fecha:"21/12/18"},fechal:"05/07/18", disponibles:"12",imagen:"../assets/high.jpg"},
  {id:14,pelicula:"Me late chocolate",costo:"$30", vendedor:{nombre:"Jenny McArthy", valoracion:[1,2,3,4]}, resena:{autor:"Jacob Bennett", comentario:"¿qué acabo de ver?", fecha:"30/03/16"},fechal:"23/02/16", disponibles:"23",imagen:"../assets/me.jpg"},
  {id:15,pelicula:"Hombre al agua",costo:"$120", vendedor:{nombre:"Paul Hinderson", valoracion:[1,2,3]}, resena:{autor:"Ethan Torres", comentario:"Muy divertida", fecha:"20/10/18"},fechal:"08/10/17", disponibles:"43",imagen:"../assets/hombre.jpg"},
  {id:16,pelicula:"Bohemian Rhapsody",costo:"$160", vendedor:{nombre:"John Smith", valoracion:[1,2,3,4]}, resena:{autor:"Isabella Brooks", comentario:"Spoiler alert: Se muere al final", fecha:"08/04/18"},fechal:"04/12/17", disponibles:"26",imagen:"../assets/bohemian.jpg"},
  {id:17,pelicula:"Mary Poppins", costo:"$180",vendedor:{nombre:"Kate Johnson", valoracion:[1,2,3]}, resena:{autor:"Charlotte Perry", comentario:"Supercalifragilisticexpialidocious", fecha:"18/10/18"},fechal:"05/07/18", disponibles:"18",imagen:"../assets/mary.jpg"},
  {id:18,pelicula:"Karate Kid", costo:"$85",vendedor:{nombre:"Jenny McArthy", valoracion:[1,2,3,4]}, resena:{autor:"James Murphy", comentario:"No se deberia de llamar Karate…Eso es Kung Fu", fecha:"14/11/17"},fechal:"08/10/17", disponibles:"24",imagen:"../assets/karate.jpg"},
  {id:19,pelicula:"James bond", costo:"$135",vendedor:{nombre:"Paul Hinderson", valoracion:[1,2,3]}, resena:{autor:"Howard Cox", comentario:"Mi favorite James Bond siempre será Pierce Brosnan", fecha:"09/05/18"},fechal:"04/12/17", disponibles:"13",imagen:"../assets/james.jpg"},
]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
  }
  clickobjeto(id: number){
    this.navCtrl.push(this.objeto,{producto:this.productos[id], carrito:this.carrito});
  }
  clickcarro(){
    this.navCtrl.push(this.carro,{carrito:this.carrito});
  }
}
