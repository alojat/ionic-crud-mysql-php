import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { Events } from "ionic-angular";

@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  item = {
    nombre: null,
    marca: null,
    precio: null,
    observaciones: null,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient, 
    private events:Events) {
  }

  guardarProducto(){
     var fd = new FormData();
     fd.append('descripcion', this.item.nombre);
     fd.append('marca', this.item.marca);
     fd.append('pventa', this.item.precio);
     fd.append('observaciones', this.item.observaciones);
     
     this.http.post("http://localhost/micrudtutoapp/src/api/productos.php?opcion=3", fd).subscribe(res => {
       if(res){
        this.navParams.get("parentPage").cargarInformacion();
        this.navCtrl.pop();
       }
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

}
